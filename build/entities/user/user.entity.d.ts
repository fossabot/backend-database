import { Gender } from '../../enums/Gender.enum';
import { AddressEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { BaseEntity } from '../base.entity';
export declare class UserEntity extends BaseEntity {
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob: Date;
    biography: string;
    verified: boolean;
    phoneNumber: string;
    address: AddressEntity;
    privateMatchingProfile: PrivateMatchingProfileEntity;
    privateOffers: PrivateOfferEntity[];
    privateRequests: PrivateRequestEntity[];
}
