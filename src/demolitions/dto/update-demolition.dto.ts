import { PartialType } from '@nestjs/mapped-types';
import { CreateDemolitionDto } from './create-demolition.dto';

export class UpdateDemolitionDto extends PartialType(CreateDemolitionDto) {}
