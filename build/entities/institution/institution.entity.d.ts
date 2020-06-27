import { AddressEntity, CategoryEntity, InstitutionAdminEntity, InstitutionalMatchingProfileEntity, InstitutionalOfferEntity, InstitutionalRequestEntity, InstitutionTypeEntity, RewardRecordEntity } from '../..';
export declare class InstitutionEntity {
    id: string;
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
