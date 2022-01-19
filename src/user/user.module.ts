import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserLogic } from './user-logic';
import { UserController } from './user.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [UserService, UserLogic],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule { }