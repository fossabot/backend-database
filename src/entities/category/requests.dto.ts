import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
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
  create: CreateCategoryDto
};
