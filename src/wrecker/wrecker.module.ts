import { Module } from '@nestjs/common';
import { WreckerService } from './wrecker.service';
import { WreckerController } from './wrecker.controller';

@Module({
  controllers: [WreckerController],
  providers: [WreckerService],
  exports: [
    WreckerModule
  ]
})
export class WreckerModule {}
