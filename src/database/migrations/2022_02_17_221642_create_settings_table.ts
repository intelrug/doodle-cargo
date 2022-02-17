import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSettingsTable implements MigrationInterface {
  name = 'create_settings_table_1645125402322';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'settings',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'chat_id',
            type: 'int',
          },
          {
            name: 'website',
            type: 'enum',
            enum: [
              'TWITTER',
              'DERPIBOORU',
              'DEVIANTART',
              'PINTEREST',
              'FURAFFINITY',
              'INSTAGRAM',
              'FIVERR',
              'DISCORD',
              'PATREON',
              'YCHCOMMISHES',
            ],
          },
          {
            name: 'enabled',
            type: 'boolean',
            default: false,
          },
          {
            name: 'credentials',
            type: 'longtext',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('settings');
  }
}
