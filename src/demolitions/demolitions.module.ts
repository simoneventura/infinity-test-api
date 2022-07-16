import { Module } from '@nestjs/common';
import { DemolitionsService } from './demolitions.service';
import { DemolitionsController } from './demolitions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demolition } from './entities/demolition.entity';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Demolition]),
    MailModule
  ],
  controllers: [DemolitionsController],
  providers: [DemolitionsService],
  exports: [TypeOrmModule]
})
export class DemolitionsModule {}
