import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { LoginUserDto } from "./login-user.dto";
import { sign, verify } from "jsonwebtoken";
import { compare } from "bcrypt";
import { UserType } from "src/user/user.type";
import { JWT_SECRET } from "src/config";

@Injectable()
export class AuthService {
    private user: UserType;

    constructor(private userService: UserService) { }

    async verifyUser(loginUserDto: LoginUserDto): Promise<boolean> {
        this.user = await this.userService.findByEmail(loginUserDto.email);

        if (!this.user) {
            return false;
        }
        return await compare(loginUserDto.password, this.user.password);
    }

    generateToken(): Promise<string> {
        try {
            return sign(
                {
                    id: this.user.id,
                    email: this.user.email,
                    userName: this.user.userName
                },
                JWT_SECRET,
                { expiresIn: 60 * 60 }
            );
        } catch (error) {
            return Promise.resolve('');
        }
    }

    verifyToken(token: string): boolean {
        try {
            var decoded = verify(token, JWT_SECRET);
            return !!decoded
        } catch (error) {
            return false;
        }
    }
}