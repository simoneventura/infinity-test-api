import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemolitionsModule } from './demolitions/demolitions.module';
import { Demolition } from './demolitions/entities/demolition.entity';
import { CarsModule } from './cars/cars.module';
import { Car } from './cars/entities/car.entity';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    DemolitionsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      /* entities: [Demolition, Car], */
      autoLoadEntities: true,
      synchronize: true,
    }),
    CarsModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
