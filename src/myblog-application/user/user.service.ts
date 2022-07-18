import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { Role_Type } from 'src/myblog-domain-shared/enum/role-enum';
import { UserRole } from 'src/myblog-domain/user/user-role';
import { User } from 'src/myblog-domain/user/user';
import { CreateUserDto } from './create-user-dto';
import { ResultUserDto } from './result-user-dto';
import { UpdateUserDto } from './update-user-dto';
import { UserRoleDto } from './user-role-dto';
@Injectable()
export class UserService {
    constructor() {
    }

    async getUserByUserName(username: string): Promise<ResultUserDto> {
        const resultUser = await User.findOne({ UserName: username });
        const resultUserDto = new ResultUserDto(resultUser.Id.toString(), resultUser.UserName, resultUser.Password);
        return resultUserDto;
    }

    async getUserById(id: string): Promise<ResultUserDto> {
        const resultUser = await User.findOne(id);
        const resultUserDto = new ResultUserDto(resultUser.Id.toString(), resultUser.UserName, resultUser.Password);
        return resultUserDto;
    }

    async getUsers(): Promise<ResultUserDto[]> {

        const users = await User.find();
        const resultUsers = users.map((u) => {
            const resultUserDto = new ResultUserDto(u.Id.toString(), u.UserName, u.Password);
            resultUserDto.userroles = u.Roles.map((r) => {

                return new UserRoleDto(r.RoleName, r.RoleType);

            });
            return resultUserDto;
        });

        return resultUsers;
    }


    async createUser(createUserDto: CreateUserDto): Promise<ResultUserDto | string> {


        const existsUser = await User.findOne({ UserName: createUserDto.username });
        if(existsUser){
            return '已存在该用户！';
        }

        const newUser = new User(createUserDto.username, createUserDto.password);

        const userRoles = new Array<UserRole>();
        for (const roletype of createUserDto.roletypes) {
            const userRole = new UserRole();
            switch (Number(roletype)) {
                case Role_Type.SystemAdmin:
                    userRole.RoleName = Role_Type[1]
                    userRole.RoleType = Role_Type.SystemAdmin;
                    userRoles.push(userRole);
                    break;
                case Role_Type.SystemSuperUser:
                    userRole.RoleName = Role_Type[2]
                    userRole.RoleType = Role_Type.SystemSuperUser;
                    userRoles.push(userRole);
                    break;
                case Role_Type.SystemUser:
                    userRole.RoleName = Role_Type[3]
                    userRole.RoleType = Role_Type.SystemUser;
                    userRoles.push(userRole);
                    break;
                default:
                    throw new ForbiddenException('没有该权限!');
            }
        }

        newUser.setRole(userRoles);
        const resultUser = await User.save(newUser);
        const resultUserDto = new ResultUserDto(resultUser.Id.toString(), resultUser.UserName, resultUser.Password);
        return resultUserDto;
    }


    async updateUser(id: string, user: UpdateUserDto): Promise<ResultUserDto> {

        const oldResultUser = await User.findOne(id);
        oldResultUser.Password = user.password;
        const newResultUser = await oldResultUser.save();
        const resultUserDto = new ResultUserDto(newResultUser.Id.toString(), newResultUser.UserName, newResultUser.Password);
        return resultUserDto;
    }

    async deleteUser(id: string): Promise<boolean|string> {
        const existsUser = await User.findOne(id);
        if(existsUser && existsUser.Roles.find(d=>d.RoleType).RoleType == Role_Type.SystemAdmin ){
            return '不允许删除SystemAdmin';
        }

        const oldResultUser = await User.delete(id);
        return oldResultUser.affected > 0 ? true : false;
    }



}
