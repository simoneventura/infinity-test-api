import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { IWrecker } from 'src/wrecker/wrecker.service';
import { DemolitionsService } from './demolitions.service';
import { CreateDemolitionDto } from './dto/create-demolition.dto';
import { UpdateDemolitionDto } from './dto/update-demolition.dto';
import { EMPLOYEE_LIST } from './employee.config';

@Controller('demolitions')
export class DemolitionsController {
  constructor(private readonly demolitionsService: DemolitionsService) {}

  @Post()
  create(@Body() createDemolitionDto: CreateDemolitionDto) {
    return this.demolitionsService.create(createDemolitionDto);
  }

  @Post('assignEmployee')
  assignEmployee(@Body() payload: { demolitionId: number, employeeName: string }){
    console.log('Payload: ', payload)
    return this.demolitionsService.assignEmployee(payload.demolitionId, payload.employeeName)
  }

  @Post('assignWrecker')
  assignWrecker(@Body() payload: { demolitionId: number, socialReason: string }){
    console.log("Social reason arrivata al controller: ", payload.socialReason)
    return this.demolitionsService.assignWrecker(payload.demolitionId, payload.socialReason)
  }

  @Get('employeeList')
  getEmployee(){
    return {
      data: {
        employee: EMPLOYEE_LIST()
      }
    }
  }

  @Get('getAll')
  async findAll() {
     return this.demolitionsService.findAll();
  }

  /* @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.demolitionsService.findOne(+id);
  } */

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemolitionDto: UpdateDemolitionDto) {
    return this.demolitionsService.update(+id, updateDemolitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demolitionsService.remove(+id);
  }
}
