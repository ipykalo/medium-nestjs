import { ConnectionOptions } from "typeorm";
import { UserEntity } from "src/user/user.entity";
import { TagsEntity } from "src/tags/tags.entity";

export const connectionOptions: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'medium',
    password: '12457800',
    database: 'medium',
    entities: [TagsEntity, UserEntity],
    synchronize: true
}