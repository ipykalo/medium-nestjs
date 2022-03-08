import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserEntity } from "src/user/user.entity";
import { CreateUserDto } from "./create-user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getUser(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.create(createUserDto);
    }
}