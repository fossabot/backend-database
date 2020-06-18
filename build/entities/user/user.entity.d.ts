import { AddressEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';
export declare class UserEntity {
    id: string;
    addressId: string;
    address: AddressEntity;
    matchingProfile: PrivateMatchingProfileEntity;
    offers: PrivateOfferEntity[];
    requests: PrivateRequestEntity[];
}
