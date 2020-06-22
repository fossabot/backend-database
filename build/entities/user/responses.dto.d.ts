import { BaseResponseDto } from '../baseResponse.dto';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { Gender } from '../../enums/Gender.enum';
import { AddressEntity } from '../address/address.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';
export declare class GetUserDto extends BaseResponseDto {
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob: Date;
    biography: string;
    verified: boolean;
    phoneNumber: string;
    address: AddressEntity;
}
export declare class GetUserWithRelationsDto extends GetUserDto {
    privateMatchingProfile: PrivateMatchingProfileEntity;
    privateOffers: PrivateOfferEntity[];
    privateRequests: PrivateRequestEntity[];
}
export declare const userSerialize: {
    get: typeof GetUserWithRelationsDto;
    create: typeof GetUserDto;
};
export declare const userJoin: {
    address: {};
    privateOffers: {};
    privateRequests: {};
    privateMatchingProfile: {};
};
