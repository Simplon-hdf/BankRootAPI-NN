import { Test, TestingModule } from '@nestjs/testing';
import { UsersProvider } from '../src/providers/users/users.provider';

describe('UsersService', () => {
  let service: UsersProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersProvider],
    }).compile();

    service = module.get<UsersProvider>(UsersProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
