import { join } from "path";
import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12457800',
    database: 'medium',
    entities: [
        join(__dirname, '**', '*.entity.{ts,js}')
    ],
    migrationsTableName: "migrations_history",
    migrations: [
        join(__dirname, 'migrations/*{.ts,.js}')
    ],
    cli: {
        migrationsDir: 'src/migrations'
    },
    synchronize: true
}

export default config;