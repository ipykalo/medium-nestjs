import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateTagDto } from "./create-tag.dto";
import { TagsEntity } from "./tags.entity";
import { TagsService } from "./tags.service";

@Controller('tags')
export class TagsController {

    constructor(private tagService: TagsService) { }

    @Get()
    getTags(): Promise<TagsEntity[]> {
        return this.tagService.fetchAllTags();
    }

    @Post()
    createTag(@Body() tag: CreateTagDto): Promise<TagsEntity> {
        return this.tagService.createTag(tag);
    }

    @Delete(':id')
    async deleteTag(@Param('id') id: string): Promise<string> {
        const res = await this.tagService.deleteTag(+id);
        if (res.affected) {
            return 'success';
        }
        return 'can not delete tag';
    }
}