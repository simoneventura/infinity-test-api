import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Car } from 'src/cars/entities/car.entity';
import { MailService } from 'src/mail/mail.service';
import { Wrecker } from 'src/wrecker/entities/wrecker.entity';
import { IWrecker, WreckerService } from 'src/wrecker/wrecker.service';
import { DataSource, FindManyOptions, FindOneOptions, FindOptionsSelect, FindOptionsSelectByString, getConnection, Repository } from 'typeorm';
import { CreateDemolitionDto } from './dto/create-demolition.dto';
import { UpdateDemolitionDto } from './dto/update-demolition.dto';
import { Demolition } from './entities/demolition.entity';

@Injectable()
export class DemolitionsService {

  constructor(
    @InjectRepository(Demolition) private demolitionRepository: Repository<Demolition>,
    /* private carRepository: Repository<Car>, */
    private dataSource: DataSource,
    private mailService: MailService,
    private wreckerService: WreckerService,
    private readonly httpClient: HttpService
  ) {}

  create(createDemolitionDto: CreateDemolitionDto) {
    /* return 'This action adds a new demolition'; */
    /* let carToUpdate = this.carRepository.find({ select: '*' as FindOptionsSelect<Car>, where: (carObj: Car) => carObj.targa === createDemolitionDto.freeCar.targa } as FindManyOptions<Car>) */

    try{
      this.httpClient.post('http://ec2-15-160-220-217.eu-south-1.compute.amazonaws.com/infinity-car/v1/demolition-documents', createDemolitionDto).subscribe(
        response => console.log('Call forwarded successfully'),
        error => console.log('Call NOT forwarded successfully')
      )
    }catch(exception: any){
      console.log('Call has triggered exception')
    }
    

    /* let craftedWithdrawPlace: string = createDemolitionDto.luogoRitiro.indirizzo + ', ' + createDemolitionDto.luogoRitiro.civico + ', ' + createDemolitionDto.luogoRitiro.comune.nome + ', ' + createDemolitionDto.luogoRitiro.comune.caps;
    console.log('Car DTO: ', createDemolitionDto.freeCar.toString());
    this.alternativeCreateOne(new Demolition({
      id: Math.floor(100000 + Math.random() * 900000),
      idCanale: createDemolitionDto.idcanale,
      note: createDemolitionDto?.note ? createDemolitionDto.note : '',
      privacy: createDemolitionDto.privacy,
      privacyMarketing: createDemolitionDto.privacyMarketing,
      freeCar: new Car({...createDemolitionDto.freeCar, autoalimentazione: createDemolitionDto.freeCar.autoalimentazione.id, vaInMoto: createDemolitionDto.freeCar?.vaInMoto, blocked: createDemolitionDto.freeCar?.blocked}),
      luogoRitiro: craftedWithdrawPlace,
      referrer: createDemolitionDto?.referrer?.id ? createDemolitionDto?.referrer?.id : 0,
      source: createDemolitionDto.source,
      city: createDemolitionDto.city,
      zipCode: createDemolitionDto.zipCode,
      emailProprietario: createDemolitionDto.email,
      ownerName: createDemolitionDto.nomeUser,
      ownerLastname: createDemolitionDto.cognomeUser
    }) ).then(
      response => { 
        console.log('Demolition created');
        this.mailService.sendUserDemolitionEmail(createDemolitionDto.email, createDemolitionDto.nomeUser, createDemolitionDto.cognomeUser).then(
          success => console.log('Mail sent')
        )
      }
    ) */
  }

  async findAll() {
    /* return this.demolitionRepository.find({ select: '*'} as FindOneOptions<Demolition>).then(
      success => { return success }
    ) */
    try {
      let result = await this.demolitionRepository.find() 

      return {
        success: true,
        message: 'Success',
        data: {
          demolitions: result
        }
      };
    } catch (err) {
      console.log('Not succeeded! ', err)
    }
    
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
  
  assignWrecker(demolitionId: number, socialReason: string){

    console.log('Social reason to find: ', socialReason)
    let wrecker = this.wreckerService.wreckers.find(wrecker => wrecker.socialReason.includes(socialReason));

    if(!wrecker) return console.log('Wrecker non trovato!');
    console.log('Wrecker founded email: ', wrecker.email)
    console.log('Wrecker founded reason: ', wrecker.socialReason)

    this.updateWrecker({ id: demolitionId }, wrecker).then(
      success => {
        console.log('Arrivo fino a qui. ID: ', Number(demolitionId))
        this.demolitionRepository.find({ /* select: '*',  */where: (demoObj) => demoObj.id === demolitionId } as FindManyOptions<Demolition>).then(
          findSuccess => {
            console.log('Devo mandare la mail')
            console.log('Email trovata: ', findSuccess);
            
            let foundedRecord = findSuccess.find(item => item.id === Number(demolitionId));
            this.mailService.sendAssignationToUser(foundedRecord.emailProprietario, foundedRecord.ownerName)
            .then(success => console.log('Wrecker email sent'))
            this.mailService.sendAssignationToWrecker(wrecker.email)
          }
        )
      }
    )

    
  }

  async updateWrecker(criteria: { id: number }, wrecker: IWrecker): Promise<any> {
    try {
      console.log('Sono il DTO: ', criteria);
      await this.demolitionRepository.update(criteria.id, {wreckerEmail: wrecker.email, wreckerSocialReason: wrecker.socialReason}); 

      /* return {
        success: true,
        message: 'Successfully updated profile',
      }; */
    } catch (err) {
      console.log('Not succeeded!')
    }
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


  async alternativeCreateOne(demolition: Demolition){
    try{
      await this.demolitionRepository.save(demolition)
    }catch(err){
      console.warn('Query not working!')
      console.warn('Error obj: ', err.toString());
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
