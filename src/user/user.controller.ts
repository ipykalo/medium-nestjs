import { BadRequestException, Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
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
    create(@Body() createUser: CreateUserDto): Promise<UserType> {
        return this.userService.create(createUser);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateUser: Partial<UpdateUserDto>): Promise<string> {
        try {
            const res = await this.userService.update(id, updateUser);

            if (res?.affected > 0) {
                return 'Updated successfuly';
            }
            return `Can not update user with id: ${id}`;
        } catch (error) {
            throw new BadRequestException();
        }
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