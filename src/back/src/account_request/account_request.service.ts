import { Injectable } from '@nestjs/common';
import { CreateAccountRequestDto } from './dto/create-account_request.dto';
import { UpdateAccountRequestDto } from './dto/update-account_request.dto';

@Injectable()
export class AccountRequestService {
  create(createAccountRequestDto: CreateAccountRequestDto) {
    return 'This action adds a new accountRequest';
  }

  findAll() {
    return `This action returns all accountRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountRequest`;
  }

  update(id: number, updateAccountRequestDto: UpdateAccountRequestDto) {
    return `This action updates a #${id} accountRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountRequest`;
  }
}
