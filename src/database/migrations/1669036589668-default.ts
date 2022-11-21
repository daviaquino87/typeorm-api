import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669036589668 implements MigrationInterface {
    name = 'default1669036589668'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP CONSTRAINT "UQ_48b79438f8707f3d9ca83d85ea0"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD CONSTRAINT "UQ_48b79438f8707f3d9ca83d85ea0" UNIQUE ("name")`);
    }

}
