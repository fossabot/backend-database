import { CategoryEntity } from '../..';
import { BaseEntity } from '../base.entity';
import { AddressEntity } from '../..';
import { InstitutionAdminEntity } from '../..';
import { InstitutionTypeEntity } from '../..';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
import { RewardRecordEntity } from '../..';
import { InstitutionalMatchingProfileEntity } from '../..';
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
