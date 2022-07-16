import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemolitionsService } from './demolitions.service';
import { CreateDemolitionDto } from './dto/create-demolition.dto';
import { UpdateDemolitionDto } from './dto/update-demolition.dto';

@Controller('demolitions')
export class DemolitionsController {
  constructor(private readonly demolitionsService: DemolitionsService) {}

  @Post()
  create(@Body() createDemolitionDto: CreateDemolitionDto) {
    return this.demolitionsService.create(createDemolitionDto);
  }

  @Get()
  findAll() {
    return this.demolitionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demolitionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemolitionDto: UpdateDemolitionDto) {
    return this.demolitionsService.update(+id, updateDemolitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demolitionsService.remove(+id);
  }
}
