import { Test, TestingModule } from '@nestjs/testing';
import { WreckerController } from './wrecker.controller';
import { WreckerService } from './wrecker.service';

describe('WreckerController', () => {
  let controller: WreckerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WreckerController],
      providers: [WreckerService],
    }).compile();

    controller = module.get<WreckerController>(WreckerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
