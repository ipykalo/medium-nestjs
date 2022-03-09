import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class TagsEntity {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    readonly name: string
}