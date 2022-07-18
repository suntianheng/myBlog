import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { MyBlogDomainSharedModule } from '../myblog-domain-shared/myblog-domain-shared.module';
import { AllExceptionsFilter } from './common/all-exceptions.filter';
import { User } from './user/user';

@Module({
    imports: [MyBlogDomainSharedModule],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter,
        },
    ],
})
export class MyBlogDomainModule { }
