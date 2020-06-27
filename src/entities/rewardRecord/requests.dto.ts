import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from 'class-validator';
import { ClientType } from '../../enums/ClientType.enum';
import { Type } from 'class-transformer';
import { MatchingEntity } from '../matching/matching.entity';
import { InstitutionEntity } from '../institution/institution.entity';

export class CreateRewardRecordDto {
  @ApiProperty({ type: 'number', format: 'double', minimum: 0, nullable: false })
  @IsNumber()
  @IsPositive()
  points: number;

  @ApiProperty({ type: 'boolean', default: false })
  @IsBoolean()
  verified: boolean;

  @ApiProperty({ type: 'string', enum: ClientType, nullable: false })
  @IsEnum(ClientType)
  receiverType: ClientType;

  @ApiProperty({ type: 'string', format: 'uuid', nullable: false })
  @IsUUID('4')
  rewardReceiverId: string;

  @ApiProperty({ type: MatchingEntity, nullable: false, required: true })
  @IsNotEmpty()
  @Type(() => MatchingEntity)
  matching: MatchingEntity;

  @ApiProperty({ type: InstitutionEntity, nullable: true, required: false })
  @IsOptional()
  @Type(() => InstitutionEntity)
  verifyingInstitution: InstitutionEntity;
}

export const rewardRecordDto = {
  create: CreateRewardRecordDto
};
