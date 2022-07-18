import { Test, TestingModule } from '@nestjs/testing';
import { WreckerService } from './wrecker.service';

describe('WreckerService', () => {
  let service: WreckerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WreckerService],
    }).compile();

    service = module.get<WreckerService>(WreckerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
