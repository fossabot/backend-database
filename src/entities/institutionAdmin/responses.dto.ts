import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Gender } from '../..';

export class GetInstitutionAdminDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsUUID('4')
  id: string;

  @ApiProperty({ type: Gender })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ type: 'string', format: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'date', required: false })
  @IsOptional()
  @IsDate()
  dob?: Date;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  @IsEmail()
  biography?: string;
}

export class GetInstitutionAdminPublicDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', format: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
