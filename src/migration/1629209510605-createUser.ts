import {MigrationInterface, QueryRunner} from "typeorm";

export class createUser1629209510605 implements MigrationInterface {
    name = 'createUser1629209510605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`typeorm-apollo-server\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`typeorm-apollo-server\`.\`user\``);
    }

}
