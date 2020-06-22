import { BaseResponseDto } from '../baseResponse.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../..';
import { MatchingEntity } from '../..';

export class GetRewardRecordDto extends BaseResponseDto {
  @ApiProperty({type: 'number', format: 'double'})
  points: number;

  @ApiProperty({type: 'boolean'})
  verified: boolean;

  @ApiProperty({type: 'enum', enum: ClientType})
  receiverType: ClientType;

  @ApiProperty({type: 'string', format: 'uuid'})
  rewardReceiverId: string;
}

export class GetRewardRecordWithRelationsDto extends GetRewardRecordDto {
  @ApiProperty({type: InstitutionEntity, required: false})
  verifyingInstitution: InstitutionEntity;

  @ApiProperty({type: MatchingEntity, required: false})
  matching: MatchingEntity;
}

export const rewardRecordSerialize = {
  get: GetRewardRecordWithRelationsDto,
  create: GetRewardRecordDto
};

export const rewardRecordJoin = {
  verifyingInstitution: {},
  matching: {}
}