import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { InstitutionalMatchingProfileEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';
export declare class TagEntity extends BaseEntity {
    name: string;
    institutionalOffers: InstitutionalOfferEntity[];
    institutionalRequests: InstitutionalRequestEntity[];
    privateOffers: PrivateOfferEntity[];
    privateRequests: PrivateRequestEntity[];
    institutionalMatchingProfiles: InstitutionalMatchingProfileEntity[];
    privateMatchingProfiles: PrivateMatchingProfileEntity[];
}
