import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({ type: 'string', nullable: false })
  @IsString()
  name: string;
}

export const tagDto = {
  create: CreateTagDto
};
