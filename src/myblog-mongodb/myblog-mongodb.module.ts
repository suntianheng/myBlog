import { Module } from '@nestjs/common';
import { MyBlogDomainModule } from 'src/myblog-domain/myblog-domain.module';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { User } from 'src/myblog-domain/user/user';

const mongodbEntities = [User];



@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: "mongodb",
                database: "myblog",
                host: process.env.DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                synchronize: true,
                entities: mongodbEntities,
                logging: true,
                useUnifiedTopology: true
            }),
        }),
        TypeOrmModule.forFeature(mongodbEntities),
        MyBlogDomainModule
    ],
    controllers: [],
    providers: []
})
export class MyBlogMongoDbModule { }
