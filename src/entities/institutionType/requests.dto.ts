import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitutionTypeDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export const dto = {
  create: CreateInstitutionTypeDto
};
