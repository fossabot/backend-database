import { InstitutionEntity } from '../..';
import { BaseResponseDto } from '../baseResponse.dto';
export declare class GetCategoryDto extends BaseResponseDto {
    name: string;
    description: string;
}
export declare class GetCategoryWithRelationsDto extends GetCategoryDto {
    institutions: InstitutionEntity[];
}
export declare const serialize: {
    get: typeof GetCategoryWithRelationsDto;
    create: typeof GetCategoryDto;
};
