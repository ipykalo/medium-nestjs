import { Global, Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";

@Global()
@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [AuthService, AuthGuard],
    exports: [AuthService, AuthGuard]
})
export class AuthModule { }