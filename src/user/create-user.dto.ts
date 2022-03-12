import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly userName: string;

    @IsString()
    @IsNotEmpty()
    readonly bio: string;

    @IsString()
    @IsNotEmpty()
    readonly imgUrl: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}