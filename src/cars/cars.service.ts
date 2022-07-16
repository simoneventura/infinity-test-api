import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {

  constructor(private dataSource: DataSource){

  }

  create(createCarDto: CreateCarDto) {
    this.createOne(new Car({
      ...createCarDto
    })).then(
      response => { return response }
    )
  }

  async createOne(car: Car) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(car);
  
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      console.warn('Query not working!')
      console.warn('Error obj: ', err.toString());
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      console.log('Relising query runner..');
      await queryRunner.release();
      console.log('Query runner relesed');
    }
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
