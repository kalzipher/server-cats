import { Test, TestingModule } from '@nestjs/testing';
import { TheCatApiService } from './the-cat-api.service';

describe('TheCatApiService', () => {
  let service: TheCatApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheCatApiService],
    }).compile();

    service = module.get<TheCatApiService>(TheCatApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
