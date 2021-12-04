import { BadRequestException, Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RegisterUserDto } from './register-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Post('/register')
    async registerUser(@Body() registerUserDto: RegisterUserDto): Promise<User> {

        if (!(await this.doesUserExistByName(registerUserDto.username))) {
            const user = new User();
            Object.assign(user, registerUserDto);
            return this.userService.createUser(user);
        }
        throw new BadRequestException('User with name (' + registerUserDto.username + ') is already registered');
    }

    private async doesUserExistByName(username: string): Promise<boolean> {
        return await this.userService.findUserByName(username) !== undefined
    }
}
