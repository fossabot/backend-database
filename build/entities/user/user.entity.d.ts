import { AddressEntity } from '../address/address.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';
export declare class UserEntity {
    id: string;
    addressId: string;
    address: AddressEntity;
    matchingProfile: PrivateMatchingProfileEntity;
    offers: PrivateOfferEntity[];
    requests: PrivateRequestEntity[];
}
