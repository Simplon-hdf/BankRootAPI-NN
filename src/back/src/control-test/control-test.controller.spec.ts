import { Test, TestingModule } from '@nestjs/testing';
import { ControlTestController } from './control-test.controller';

describe('ControlTestController', () => {
  let controller: ControlTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControlTestController],
    }).compile();

    controller = module.get<ControlTestController>(ControlTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
