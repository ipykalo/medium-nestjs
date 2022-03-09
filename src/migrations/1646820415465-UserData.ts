import { MigrationInterface, QueryRunner } from "typeorm";

export class UserData1646820415465 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("INSERT INTO Users (id, firstName, lastName, isActive) VALUES (1, 'John', 'Doe, true');");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('DELETE FROM Users;');
    }
}
