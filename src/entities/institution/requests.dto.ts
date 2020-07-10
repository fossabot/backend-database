import { IsArray, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto, GetCategoryDto } from '../..';
import { Type } from 'class-transformer';

export class CreateInstitutionFusionAuthDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: 'string', format: 'email' })
  @IsNotEmpty()
  @IsString()
  contactEmail: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsPhoneNumber(null)
  phoneNumber: string;
}

export class CreateInstitutionInternalDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsString()
  institutionTypeId: string;

  @ApiProperty({ type: GetCategoryDto, isArray: true })
  @IsArray()
  @Type(() => GetCategoryDto)
  categories: GetCategoryDto[];

  @ApiProperty({ type: CreateAddressDto })
  @IsArray()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}

export class CreateInstitutionDto {
  @ApiProperty({ type: GetCategoryDto })
  @IsNotEmpty()
  internal: CreateInstitutionInternalDto;

  @ApiProperty({ type: GetCategoryDto })
  @IsNotEmpty()
  data: CreateInstitutionFusionAuthDto;
}
