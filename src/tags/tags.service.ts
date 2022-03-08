import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateTagDto } from "./create-tag.dto";
import { TagsEntity } from "./tags.entity";

@Injectable()
export class TagsService {

    constructor(@InjectRepository(TagsEntity) private repo: Repository<TagsEntity>) { }

    createTag(name: CreateTagDto): Promise<TagsEntity> {
        const tag = this.repo.create(name);
        return this.repo.save(tag);
    }

    fetchAllTags(): Promise<TagsEntity[]> {
        return this.repo.find();
    }

    deleteTag(id: number): Promise<DeleteResult> {
        return this.repo.delete(id);
    }

    editTag(id: number, name: CreateTagDto): Promise<UpdateResult> {
        return this.repo.update(id, name);
    }
}