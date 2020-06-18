import { GetCategoryDto } from '../..';
export declare class CreateInstitutionDto {
    name: string;
    description: string;
    categories: GetCategoryDto[];
}
export declare const dto: {
    create: typeof CreateInstitutionDto;
};
