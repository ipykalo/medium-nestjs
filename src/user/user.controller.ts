import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserEntity } from "src/user/user.entity";
import { CreateUserDto } from "./create-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getAll(): Promise<UserEntity[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<UserEntity> {
        return this.userService.findOne(+id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
        return this.userService.create(createUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<string> {
        const res = await this.userService.remove(id);

        if (res?.affected > 0) {
            return 'Deleted successfuly';
        }
        return `Can not delete user with id: ${id}`;
    }
}