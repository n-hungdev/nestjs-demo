import { Module } from '@nestjs/common';
import { DB_PROVIDER } from './database.provide';

@Module({
  providers: [DB_PROVIDER],
  exports: [DB_PROVIDER],
})
export class DatabaseModule {}
