import { Module } from '@nestjs/common';
import { DemolitionsService } from './demolitions.service';
import { DemolitionsController } from './demolitions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demolition } from './entities/demolition.entity';
import { MailModule } from 'src/mail/mail.module';
import { WreckerModule } from 'src/wrecker/wrecker.module';
import { WreckerService } from 'src/wrecker/wrecker.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Demolition]),
    MailModule,
    WreckerModule
  ],
  controllers: [DemolitionsController],
  providers: [DemolitionsService, WreckerService],
  exports: [TypeOrmModule]
})
export class DemolitionsModule {}
