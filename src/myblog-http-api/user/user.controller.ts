import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/myblog-application/user/create-user-dto';
import { UpdateUserDto } from 'src/myblog-application/user/update-user-dto';
import { UserService } from 'src/myblog-application/user/user.service';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }


    @Get('getUsers')
    async getUsers() {
        return this.userService.getUsers();
    }

    @Get('getUserById/:id')
    async getUser(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }


    @Post('createUser')
    @ApiBody({ type: CreateUserDto })
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put('updateUser/:id')
    @ApiBody({ type: UpdateUserDto })
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete('deleteUser/:id')
    async deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }



}
