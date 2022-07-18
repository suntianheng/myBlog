import { ApiProperty } from "@nestjs/swagger";

export class UserRoleDto {

    constructor(rolename: string, roletype: number) {

        this.rolename = rolename;
        this.roletype = roletype;
    }

    @ApiProperty()
    rolename: string

    @ApiProperty()
    roletype: number;

}
