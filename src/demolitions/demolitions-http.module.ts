import { Module } from '@nestjs/common';
import { DemolitionsModule } from './demolitions.module';
import { DemolitionsService } from './demolitions.service';
import { DemolitionsController } from './demolitions.controller';

@Module({
  imports: [DemolitionsModule],
  providers: [DemolitionsService],
  controllers: [DemolitionsController]
})
export class UserHttpModule {}
