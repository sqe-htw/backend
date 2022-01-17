import { BadRequestException, Injectable } from "@nestjs/common";
import { RegisterUserDto } from "./register-user.dto";

@Injectable()
export class UserLogic {
    checkUserDto(registerUserDto: RegisterUserDto) {
        if (registerUserDto.username == null || registerUserDto.username == '') {
            throw new BadRequestException('Username should not be empty!');
        } else if (registerUserDto.password == null || registerUserDto.password == '') {
            throw new BadRequestException('Password should not be empty!');
        }
    }
}