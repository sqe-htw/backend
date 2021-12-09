import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
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

        this.checkUserDto(registerUserDto);

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

    private checkUserDto(registerUserDto: RegisterUserDto) {
        if (registerUserDto.username == null || registerUserDto.username == '') {
            throw new BadRequestException('Username should not be empty!');
        } else if (registerUserDto.password == null || registerUserDto.password == '') {
            throw new BadRequestException('Password should not be empty!');
        }
    }
}
