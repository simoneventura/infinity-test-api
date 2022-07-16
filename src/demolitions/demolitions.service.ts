import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/cars/entities/car.entity';
import { DataSource, FindManyOptions, FindOneOptions, FindOptionsSelect, FindOptionsSelectByString, getConnection, Repository } from 'typeorm';
import { CreateDemolitionDto } from './dto/create-demolition.dto';
import { UpdateDemolitionDto } from './dto/update-demolition.dto';
import { Demolition } from './entities/demolition.entity';

@Injectable()
export class DemolitionsService {

  constructor(
    @InjectRepository(Demolition)
    private demolitionRepository: Repository<Demolition>,
    /* private carRepository: Repository<Car>, */
    private dataSource: DataSource
  ) {}

  create(createDemolitionDto: CreateDemolitionDto) {
    /* return 'This action adds a new demolition'; */
    /* let carToUpdate = this.carRepository.find({ select: '*' as FindOptionsSelect<Car>, where: (carObj: Car) => carObj.targa === createDemolitionDto.freeCar.targa } as FindManyOptions<Car>) */

    let craftedWithdrawPlace: string = createDemolitionDto.luogoRitiro.indirizzo + ', ' + createDemolitionDto.luogoRitiro.civico + ', ' + createDemolitionDto.luogoRitiro.comune + ', ' + createDemolitionDto.luogoRitiro.cap;

    this.createOne(new Demolition({
      id: 10,
      idCanale: createDemolitionDto.idcanale,
      note: createDemolitionDto.note ? createDemolitionDto.note : '',
      privacy: createDemolitionDto.privacy,
      privacyMarketing: createDemolitionDto.privacyMarketing,
      freeCar: new Car({...createDemolitionDto.freeCar, autoalimentazione: createDemolitionDto.freeCar.autoalimentazione.id}),
      luogoRitiro: craftedWithdrawPlace,
      referrer: createDemolitionDto?.referrer?.id ? createDemolitionDto?.referrer?.id : 0,
      source: createDemolitionDto.source,
      city: createDemolitionDto.city,
      zipCode: createDemolitionDto.zipCode
    }) /* as Demolition */).then(
      response => { return response }
    )
  }

  findAll() {
    return `This action returns all demolitions`;
  }

  findOne(id: number) {
    return this.demolitionRepository.find({ select: '*', where: demoObj => demoObj.id === id } as FindOneOptions<Demolition>);
    /* return `This action returns a #${id} demolition`; */
  }

  update(id: number, updateDemolitionDto: UpdateDemolitionDto) {
    return `This action updates a #${id} demolition`;
  }

  remove(id: number) {
    return `This action removes a #${id} demolition`;
  }

  assignEmployee(demolitionId: number, employeeName: string){
    return this.updateEmployee({ id: demolitionId }, employeeName)
  }

  async updateEmployee(dto: { id: number }, employeeName: string): Promise<any> {
    try {
      console.log('Sono il DTO: ', dto);
      await this.demolitionRepository.update(dto.id, {assignedTo: employeeName}); 

      return {
        success: true,
        message: 'Successfully updated profile',
      };
    } catch (err) {
      console.log('Not succeeded!')
    }
}



  async createOne(demolition: Demolition) {
    const queryRunner = this.dataSource.createQueryRunner();
  
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(demolition);
  
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
}
