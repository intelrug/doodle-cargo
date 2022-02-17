import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelegrafModule } from 'nestjs-telegraf';

import { TypeOrmConfigService } from '~/common/typeorm';
import { ConfigModule } from '~/modules/config';
import { DerpibooruModule } from '~/modules/derpibooru';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_TOKEN || '',
    }),
    ScheduleModule.forRoot(),
    ConfigModule,
    DerpibooruModule,
  ],
})
export class AppModule {}
