import { ApiProperty } from "@nestjs/swagger";
import { UserRoleDto } from "./user-role-dto";

export class ResultUserDto {

    constructor(id :string,username: string, password: string) {

        this.id = id;
        this.username = username;
        this.password = password;
    }

    @ApiProperty()
    public id: string;

    @ApiProperty()
    public username: string;

    @ApiProperty()
    public password: string;

    @ApiProperty()
    public userroles:UserRoleDto[];

    
}
