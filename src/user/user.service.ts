import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./create-user.dto";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private repo: Repository<UserEntity>) { }

    create(createUser: CreateUserDto): Promise<UserEntity> {
        const user = this.repo.create(createUser);
        return this.repo.save(user);
    }

    findAll(): Promise<UserEntity[]> {
        return this.repo.find();
    }

    findOne(id: string): Promise<UserEntity> {
        return this.repo.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}