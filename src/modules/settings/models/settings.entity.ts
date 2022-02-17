import { JsonTransformer } from '@anchan828/typeorm-transformers';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { WebsiteName } from '../models/enums/website-name.enum';

@Entity({ name: 'settings' })
export class Setting {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    name: 'chat_id',
    type: 'int',
  })
  chatId: number;

  @Column({
    type: 'enum',
    enum: WebsiteName,
  })
  website: WebsiteName;

  @Column()
  enabled: boolean;

  @Column({
    type: 'longtext',
    transformer: new JsonTransformer(),
  })
  credentials: Record<string, string>;
}
