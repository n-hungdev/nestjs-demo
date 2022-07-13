import { Module } from '@nestjs/common';
import { DB_PROVIDER } from './database.provide';
// sss
@Module({
  providers: [DB_PROVIDER],
  exports: [DB_PROVIDER],
})
export class DatabaseModule {}
