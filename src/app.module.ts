import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { CustomCommandModule } from 'scripts/command.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CommandModule,
    CustomCommandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
