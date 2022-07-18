import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MyBlogDomainModule } from '../myblog-domain/myblog-domain.module';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './passport/local.strategy';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './passport/jwt.strategy';
@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: '1h' },
        }),


        MyBlogDomainModule,
    ],
    providers: [
        UserService, AuthService, LocalStrategy, JwtStrategy
    ],
    exports: [AuthService,UserService]
})
export class MyBlogApplicationModule { }
