import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../..';

export class CreateInstitutionAdminDto {
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
  @IsString()
  biography?: string;
}
