import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { LoginUserDto } from "./login-user.dto";
import { sign, verify } from "jsonwebtoken";
import { compare } from "bcrypt";

@Injectable()
export class AuthService {
    private readonly secretKey: string = 'secret_key';

    constructor(private userService: UserService) { }

    async verifyUser(loginUserDto: LoginUserDto): Promise<boolean> {
        const user = await this.userService.findByEmail(loginUserDto.email);

        if (!user) {
            return false;
        }
        return await compare(loginUserDto.password, user.password);
    }

    generateToken(email: string): Promise<string> {
        try {
            return sign({ email }, this.secretKey);
        } catch (error) {
            return Promise.resolve('');
        }
    }

    verifyToken(token: string): boolean {
        try {
            var decoded = verify(token, this.secretKey);
            return !!decoded
        } catch (error) {
            return false;
        }
    }
}