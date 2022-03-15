import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) { }

    canActivate(context: ExecutionContext): boolean {
        try {
            const req = context.switchToHttp().getRequest();
            return this.authService.verifyToken(req?.headers?.authorization);
        } catch (error) {
            return false;
        }
    }
}