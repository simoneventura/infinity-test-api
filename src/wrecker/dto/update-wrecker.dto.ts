import { PartialType } from '@nestjs/mapped-types';
import { CreateWreckerDto } from './create-wrecker.dto';

export class UpdateWreckerDto extends PartialType(CreateWreckerDto) {}
