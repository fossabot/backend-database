import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class BaseResponseDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  id: string;

  @ApiProperty({ type: 'string', format: 'date' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ type: 'string', format: 'date' })
  @IsDate()
  updatedAt: Date;
}
