import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./login-user.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<{ jwt: string }> {
        const isAuthenticated = await this.authService.verifyUser(loginUserDto);

        if (!isAuthenticated) {
            throw new UnauthorizedException();
        }
        const jwt: string = await this.authService.generateToken();
        return { jwt };
    }
}