import { Controller, Request, Post, UseGuards, Body, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/myblog-application/user/login-user-dto';
import { AuthService } from 'src/myblog-application/auth/auth.service';
import { LocalAuthGuard } from 'src/myblog-application/passport/local-auth.guard';


@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({ type: LoginUserDto })
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

}
