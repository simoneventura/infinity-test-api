import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WreckerService } from './wrecker.service';
import { CreateWreckerDto } from './dto/create-wrecker.dto';
import { UpdateWreckerDto } from './dto/update-wrecker.dto';

@Controller('wrecker')
export class WreckerController {
  constructor(private readonly wreckerService: WreckerService) {}

  @Post()
  create(@Body() createWreckerDto: CreateWreckerDto) {
    return this.wreckerService.create(createWreckerDto);
  }

  @Get()
  findAll() {
    return this.wreckerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wreckerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWreckerDto: UpdateWreckerDto) {
    return this.wreckerService.update(+id, updateWreckerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wreckerService.remove(+id);
  }
}
