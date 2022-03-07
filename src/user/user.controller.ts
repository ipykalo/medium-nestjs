import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller('user')
export class UserController {

    @Get()
    getUser() {
        return {
            name: "Ivan",
            age: 33
        }
    }
}