import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcrypt";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    userName: string;

    @Column({ default: "" })
    bio: string;

    @Column({ default: "" })
    imgUrl: string;

    @Column()
    password: string;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.password = await hash(this.password, 10);
    }
};