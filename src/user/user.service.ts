import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";
import { UserType } from "./user.type";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) { }

    create(createUser: CreateUserDto): Promise<UserType> {
        const user = this.repo.create(createUser);
        return this.repo.save(user);
    }

    findAll(): Promise<UserType[]> {
        return this.repo.find();
    }

    findOne(id: number): Promise<UserType> {
        return this.repo.findOne(id);
    }

    findByEmail(email: string): Promise<UserType> {
        return this.repo.findOne({ email });
    }

    remove(id: string): Promise<DeleteResult> {
        return this.repo.delete(id);
    }
}