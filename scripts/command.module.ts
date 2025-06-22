import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { DatabaseCommand } from './database.command';

@Module({
  imports: [CommandModule],
  providers: [DatabaseCommand],
})
export class CustomCommandModule {}