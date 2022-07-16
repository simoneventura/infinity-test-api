import { Test, TestingModule } from '@nestjs/testing';
import { DemolitionsController } from './demolitions.controller';
import { DemolitionsService } from './demolitions.service';

describe('DemolitionsController', () => {
  let controller: DemolitionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemolitionsController],
      providers: [DemolitionsService],
    }).compile();

    controller = module.get<DemolitionsController>(DemolitionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
