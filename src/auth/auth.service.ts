import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findUserByNameAndPassword(username, password);
        if (user) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { user };
        const jwtToken = this.jwtService.sign(payload, { expiresIn: '1d' });

        this.updateUserToken(user, jwtToken);

        return {
            access_token: jwtToken,
            user
        };
    }

    private updateUserToken(user: any, token: string): void {
        user.currentToken = token;
        this.userService.updateUser(user);
    }
}
