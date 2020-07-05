import { GetCategoryDto } from '../..';
export declare class CreateInstitutionFusionAuthDto {
    name: string;
    description: string;
    contactEmail: string;
    phoneNumber: string;
}
export declare class CreateInstitutionInternalDto {
    institutionTypeId: string;
    categories: GetCategoryDto[];
}
export declare class CreateInstitutionDto {
    internal: CreateInstitutionInternalDto;
    data: CreateInstitutionFusionAuthDto;
}
