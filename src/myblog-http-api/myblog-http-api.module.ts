import { Module } from '@nestjs/common';
import { MyBlogApplicationModule } from 'src/myblog-application/myblog-application.module';
import { AuthController } from './auth/auth.controller';
import { UserController } from './user/user.controller';

@Module({
    imports: [MyBlogApplicationModule],
    controllers: [AuthController,UserController],
    providers: []
})
export class MyBlogHttpApiModule { }
