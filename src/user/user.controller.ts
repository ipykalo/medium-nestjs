import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateUserDto } from "./create-user.dto";
import { UserService } from "./user.service";
import { UserType } from "./user.type";

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard)
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    getAll(): Promise<UserType[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<UserType> {
        return this.userService.findOne(+id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<UserType> {
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