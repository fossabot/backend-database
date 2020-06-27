import { BaseResponseDto } from '../baseResponse.dto';
import { ApiProperty } from '@nestjs/swagger';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';

export class GetTagDto extends BaseResponseDto {
  @ApiProperty({ type: 'string' })
  name: string;
}

export class GetTagWithRelationsDto extends GetTagDto {
  @ApiProperty({ type: InstitutionalOfferEntity, isArray: true, required: false })
  institutionalOffers: InstitutionalOfferEntity[];

  @ApiProperty({ type: InstitutionalRequestEntity, isArray: true, required: false })
  institutionalRequests: InstitutionalRequestEntity[];

  @ApiProperty({ type: PrivateOfferEntity, isArray: true, required: false })
  privateOffers: PrivateOfferEntity[];

  @ApiProperty({ type: PrivateRequestEntity, isArray: true, required: false })
  privateRequests: PrivateRequestEntity[];

  @ApiProperty({ type: InstitutionalMatchingProfileEntity, isArray: true, required: false })
  institutionalMatchingProfiles: InstitutionalMatchingProfileEntity[];

  @ApiProperty({ type: PrivateMatchingProfileEntity, isArray: true, required: false })
  privateMatchingProfiles: PrivateMatchingProfileEntity[];
}

export const tagSerialize = {
  get: GetTagWithRelationsDto,
  create: GetTagDto
};

export const tagJoin = {
  institutionalOffers: {},
  institutionalRequests: {},
  privateOffers: {},
  privateRequests: {},
  institutionalMatchingProfiles: {},
  privateMatchingProfiles: {}
};
