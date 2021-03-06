import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UpdateUserDto } from "./dtos/update-user.dto";
import { UserType } from "./user.type";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) { }

    async create(createUser: CreateUserDto): Promise<UserType> {
        const user = await this.repo.findOne({ email: createUser.email });

        if (user) {
            throw new HttpException('A user with the email already exist.', HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const newUser = this.repo.create(createUser);
        return this.repo.save(newUser);
    }

    update(id: number, user: Partial<UpdateUserDto>): Promise<UpdateResult> {
        return this.repo.update(id, user);
    }

    findAll(): Promise<UserType[]> {
        return this.repo.find();
    }

    async findOne(id: number): Promise<UserType> {
        return this.repo.findOne(id);
    }

    findByEmail(email: string): Promise<UserType> {
        return this.repo.findOne({ email });
    }

    remove(id: string): Promise<DeleteResult> {
        return this.repo.delete(id);
    }
}