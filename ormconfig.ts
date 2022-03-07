import { UserEntity } from "src/entities/user.entity";
import { ConnectionOptions } from "typeorm";

export const connectionOptions: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'medium',
    password: '12457800',
    database: 'medium',
    entities: [UserEntity],
    synchronize: true
}