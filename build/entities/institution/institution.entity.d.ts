import { CategoryEntity } from '../category/category.entity';
import { BaseEntity } from '../base.entity';
import { AddressEntity } from '../address/address.entity';
import { InstitutionAdminEntity } from '../institutionAdmin/institutionAdmin.entity';
import { InstitutionTypeEntity } from '../institutionType/institutionType.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { RewardRecordEntity } from '../rewardRecord/rewardRecord.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
export declare class InstitutionEntity extends BaseEntity {
    name: string;
    description: string;
    contactEmail: string;
    phoneNumber: string;
    institutionTypeId: string;
    institutionAdminId: string;
    addressId: string;
    categories: CategoryEntity[];
    institutionType: InstitutionTypeEntity;
    institutionAdmin: InstitutionAdminEntity;
    address: AddressEntity;
    institutionalOffers?: InstitutionalOfferEntity[];
    institutionalRequests?: InstitutionalRequestEntity[];
    verifiedRewardRecords?: RewardRecordEntity;
    matchingProfile?: InstitutionalMatchingProfileEntity;
}
