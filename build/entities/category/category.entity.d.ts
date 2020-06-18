import { InstitutionEntity } from '../institution/institution.entity';
import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { RewardDefinitionEntity } from '../rewardDefinition/rewardDefinition.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';
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
