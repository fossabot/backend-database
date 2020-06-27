import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxDate } from 'class-validator';
import { Gender } from '../../enums/Gender.enum';
import { AddressEntity } from '../address/address.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ type: 'string', enum: Gender, nullable: false })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ type: 'string', nullable: false })
  @IsString()
  name: string;

  @ApiProperty({ type: 'string', nullable: false })
  @IsString()
  username: string;

  @ApiProperty({ type: 'string', nullable: false })
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string', format: 'date', nullable: false })
  @IsOptional()
  @IsDate()
  @MaxDate(new Date())
  @Type(() => Date)
  dob: Date;

  @ApiProperty({ type: 'string', nullable: true })
  @IsOptional()
  @IsString()
  biography: string;

  // TODO: {Should this be deleted, so no user is able to create himself as verified?}
  @ApiProperty({ type: 'boolean', default: false, nullable: true })
  @IsOptional()
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ type: 'string', name: 'phone_number', nullable: true })
  @IsOptional()
  @IsString()
  phoneNumber: string;

  /*
   * Relations
   * */
  @ApiProperty({ type: AddressEntity, nullable: false, required: true })
  @IsNotEmpty()
  @Type(() => AddressEntity)
  address: AddressEntity;
}

export const userDto = {
  create: CreateUserDto
};
