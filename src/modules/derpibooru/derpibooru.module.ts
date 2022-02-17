import { Module } from '@nestjs/common';

import { DerpibooruService } from './services/derpibooru.service';

@Module({
  providers: [
    DerpibooruService,
  ],
  exports: [],
})
export class DerpibooruModule {}
