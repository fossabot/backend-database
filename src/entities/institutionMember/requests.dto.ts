import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '../..';

export class CreateInstitutionMemberDto {
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

  @ApiProperty({ type: 'boolean' })
  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  @IsString()
  job_title?: string;
}
