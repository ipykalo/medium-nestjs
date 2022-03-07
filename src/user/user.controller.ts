import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller('user')
export class UserController {

    constructor(private configService: ConfigService) { }

    @Get()
    getUser() {
        const user = this.configService.get<string>('db.username')
        return {
            name: "Ivan",
            age: 33,
            user: user
        }
    }
}