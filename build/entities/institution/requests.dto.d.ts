import { GetCategoryDto } from '../..';
export declare class CreateInstitutionFusionAuthDto {
    name: string;
    description: string;
    contactEmail: string;
    phoneNumber: string;
}
export declare class CreateInstitutionInternalDto {
    institutionTypeId: string;
    institutionAdminId: string;
    addressId: string;
    categories: GetCategoryDto[];
}
