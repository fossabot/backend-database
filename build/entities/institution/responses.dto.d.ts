import { GetCategoryDto } from '../category/responses.dto';
import { BaseResponseDto } from '../baseResponse.dto';
export declare class GetInstitutionDto extends BaseResponseDto {
    id: string;
    name: string;
    description: string;
    categories: GetCategoryDto[];
}
export declare const serialize: {
    get: typeof GetInstitutionDto;
    create: typeof GetInstitutionDto;
};
