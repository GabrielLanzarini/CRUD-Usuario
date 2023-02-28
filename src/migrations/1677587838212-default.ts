import { MigrationInterface, QueryRunner } from "typeorm";

export class default1677587838212 implements MigrationInterface {
    name = 'default1677587838212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pessoas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" text NOT NULL, "last_name" text NOT NULL, "username" text NOT NULL, "password" text NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_fa8104cfc91dc207880a73a1acd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pessoas"`);
    }

}
