import { Test, TestingModule } from '@nestjs/testing';
import { DemolitionsService } from './demolitions.service';

describe('DemolitionsService', () => {
  let service: DemolitionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemolitionsService],
    }).compile();

    service = module.get<DemolitionsService>(DemolitionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
