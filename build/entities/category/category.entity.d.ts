import { InstitutionEntity } from '../..';
import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
import { RewardDefinitionEntity } from '../..';
import { InstitutionalMatchingProfileEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';
export declare class CategoryEntity extends BaseEntity {
    name: string;
    description: string;
    institutions?: InstitutionEntity[];
    institutionalOffers?: InstitutionalOfferEntity[];
    institutionalRequests?: InstitutionalRequestEntity[];
    privateOffers?: InstitutionalOfferEntity[];
    privateRequests?: InstitutionalRequestEntity[];
    rewardDefinitions?: RewardDefinitionEntity[];
    institutionalMatchingProfiles?: InstitutionalMatchingProfileEntity[];
    privateMatchingProfiles?: PrivateMatchingProfileEntity[];
}
