import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsernameToUsers1647080391095 implements MigrationInterface {
    name = 'CreateUsernameToUsers1647080391095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
