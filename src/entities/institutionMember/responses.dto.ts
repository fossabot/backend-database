import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsEmail, IsNotEmpty, IsEnum, IsOptional, IsDate, IsBoolean } from 'class-validator';
import { Gender } from '../../enums/Gender.enum';

export class GetInstitutionMemberDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  institution: string;

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

  @ApiProperty({ type: 'boolean' })
  @IsNotEmpty()
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ type: 'string', required: false })
  @IsOptional()
  @IsString()
  job_title?: string;
}

export class GetInstitutionMemberPublicDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', format: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
