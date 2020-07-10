import { CreateAddressDto, GetCategoryDto } from '../..';
export declare class CreateInstitutionFusionAuthDto {
    name: string;
    description: string;
    contactEmail: string;
    phoneNumber: string;
}
export declare class CreateInstitutionInternalDto {
    institutionTypeId: string;
    categories: GetCategoryDto[];
    address: CreateAddressDto;
}
export declare class CreateInstitutionDto {
    internal: CreateInstitutionInternalDto;
    data: CreateInstitutionFusionAuthDto;
}
