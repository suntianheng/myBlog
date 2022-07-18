import { ApiProperty } from "@nestjs/swagger";
import { Role_Type } from "src/myblog-domain-shared/enum/role-enum";

export class CreateUserDto {

    @ApiProperty()
    public username: string;

    @ApiProperty()
    public password: string;

    @ApiProperty()
    public roletypes: Role_Type[];

}
