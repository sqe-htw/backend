import { BadRequestException } from '@nestjs/common';
import { RegisterUserDto } from './register-user.dto';
import { UserLogic } from './user-logic';

describe('UserController', () => {
    let userLogic: UserLogic;
    let registerUserDto: RegisterUserDto;

    beforeEach(async () => {
        userLogic = new UserLogic();
        registerUserDto = new RegisterUserDto();
    });

    test('Check username is null', async () => {
        registerUserDto.username = null;
        registerUserDto.password = 'password';
        expect(() => { userLogic.checkUserDto(registerUserDto) }).toThrow(BadRequestException);
    });
    test('Check password is null', async () => {
        registerUserDto.username = 'username';
        registerUserDto.password = null;
        expect(() => { userLogic.checkUserDto(registerUserDto) }).toThrow(BadRequestException);
    });
    test('Check username is an empty string', async () => {
        registerUserDto.username = '';
        registerUserDto.password = 'password';
        expect(() => { userLogic.checkUserDto(registerUserDto) }).toThrow(BadRequestException);
    });
    test('Check password is an empty string', async () => {
        registerUserDto.username = 'username';
        registerUserDto.password = '';
        expect(() => { userLogic.checkUserDto(registerUserDto) }).toThrow(BadRequestException);
    });

    test('Check username and password correct', async () => {
        registerUserDto.username = (Math.random() + 1).toString(36).substring(7);
        registerUserDto.password = (Math.random() + 1).toString(36).substring(7);
        expect(userLogic.checkUserDto(registerUserDto)).toBe(undefined);
    });
});