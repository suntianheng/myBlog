import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {

    @ApiProperty()
    public password: string;

}
