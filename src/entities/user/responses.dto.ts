import { BaseResponseDto } from '../baseResponse.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { Gender } from '../../enums/Gender.enum';
import { AddressEntity } from '../address/address.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';

export class GetUserDto extends BaseResponseDto {
  @ApiProperty({enum: Gender})
  gender: Gender;

  @ApiProperty({type: 'string'})
  name: string;

  @ApiProperty({type: 'string'})
  username: string;

  @ApiProperty({type: 'string'})
  email: string;

  @ApiProperty({type: 'string', format: 'date'})
  dob: Date;

  @ApiProperty({type: 'string'})
  biography: string;

  @ApiProperty({type: 'boolean'})
  verified: boolean;

  @ApiProperty({type: 'string'})
  phoneNumber: string;

  /*
   * Relations
   * */
  @ApiProperty({type: AddressEntity, required: false})
  address: AddressEntity;
}

export class GetUserWithRelationsDto extends GetUserDto {
  @ApiProperty({ type: PrivateMatchingProfileEntity, required: false })
  privateMatchingProfile: PrivateMatchingProfileEntity;

  @ApiProperty({ type: PrivateOfferEntity, isArray: true, required: false })
  privateOffers: PrivateOfferEntity[];

  @ApiProperty({ type: PrivateRequestEntity, isArray: true, required: false })
  privateRequests: PrivateRequestEntity[];
}

export const userSerialize = {
  get: GetUserWithRelationsDto,
  create: GetUserDto
};

export const userJoin = {
  address: {},
  privateOffers: {},
  privateRequests: {},
  privateMatchingProfile: {}
}