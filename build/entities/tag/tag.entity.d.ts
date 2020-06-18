import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';
export declare class TagEntity extends BaseEntity {
    name: string;
    institutionalOffers?: InstitutionalOfferEntity[];
    institutionalRequests?: InstitutionalRequestEntity[];
    privateOffers?: PrivateOfferEntity[];
    privateRequests?: PrivateRequestEntity[];
    institutionalMatchingProfiles?: InstitutionalMatchingProfileEntity[];
    privateMatchingProfiles?: PrivateMatchingProfileEntity[];
}
