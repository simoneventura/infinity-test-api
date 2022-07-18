import { Injectable } from '@nestjs/common';
import { CreateWreckerDto } from './dto/create-wrecker.dto';
import { UpdateWreckerDto } from './dto/update-wrecker.dto';
import { WRECKERS_LIST } from './wrecker.config';

@Injectable()
export class WreckerService {

  wreckers: IWrecker[] = WRECKERS_LIST();

  create(createWreckerDto: IWrecker) {
    this.wreckers.push(createWreckerDto);
    return {
      error: 'success',
      data: {}
    }
  }

  findAll() {
    return {
      error: 'success',
      data: {
        wreckers: this.wreckers
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} wrecker`;
  }

  update(id: number, updateWreckerDto: UpdateWreckerDto) {
    return `This action updates a #${id} wrecker`;
  }

  remove(id: number) {
    return `This action removes a #${id} wrecker`;
  }
}

export interface IWrecker{
  socialReason: string;
  email: string;
}
