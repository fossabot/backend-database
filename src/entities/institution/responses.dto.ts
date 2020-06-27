import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { GetCategoryDto } from '../..';
import { GetInstitutionAdminPublicDto } from '../institutionAdmin/responses.dto';
import { GetInstitutionTypeDto } from '../institutionType/responses.dto';
import { GetAddressDto } from '../address/responses.dto';

export class GetInstitutionDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsUUID('4')
  id: string;

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
  @IsEmail()
  contactEmail: string;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  @IsPhoneNumber(null)
  phoneNumber?: string;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsUUID('4')
  institutionTypeId: string;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsUUID('4')
  institutionAdminId: string;

  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsUUID('4')
  addressId: string;

  /*
   * Relations
   * */
  @ApiProperty({ type: GetInstitutionTypeDto })
  @IsOptional()
  @IsArray()
  @Type(() => GetInstitutionTypeDto)
  institutionType?: GetInstitutionTypeDto[];

  @ApiProperty({ type: GetInstitutionAdminPublicDto })
  @IsOptional()
  @Type(() => GetInstitutionAdminPublicDto)
  institutionAdmin?: GetInstitutionAdminPublicDto;

  @ApiProperty({ type: GetAddressDto })
  @IsOptional()
  @Type(() => GetAddressDto)
  address?: GetAddressDto;

  @ApiProperty({ type: GetCategoryDto })
  @IsOptional()
  @IsArray()
  @Type(() => GetCategoryDto)
  categories?: GetCategoryDto[];
}
