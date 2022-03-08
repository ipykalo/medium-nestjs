import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTagDto } from "./create-tag.dto";
import { TagsEntity } from "./tags.entity";
import { TagsService } from "./tags.service";

@Controller('tags')
export class TagsController {

    constructor(private tagService: TagsService) { }

    @Get()
    async getTags(): Promise<{ tags: string[] }> {
        const tags = await this.tagService.fetchAllTags();
        return {
            tags: tags.map(el => el?.name)
        }
    }

    @Post()
    createTag(@Body() tag: CreateTagDto): Promise<TagsEntity> {
        return this.tagService.createTag(tag);
    }

    @Put(':id')
    async updateTag(@Param('id') id: number, @Body() tag: CreateTagDto) {
        const resp = await this.tagService.editTag(id, tag);

        if (resp.affected) {
            return 'success';
        }
        return `can not edit tag with id: ${id}`;
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