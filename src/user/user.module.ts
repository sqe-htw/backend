import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { UserController } from './user.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule { }