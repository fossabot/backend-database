import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsAlpha()
  street: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsAlphanumeric()
  number: string;

  @ApiProperty({ type: 'string' })
  @IsOptional()
  @IsString()
  addition?: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsAlphanumeric()
  postalCode: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsAlpha()
  city: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsAlpha()
  country: string;
}
