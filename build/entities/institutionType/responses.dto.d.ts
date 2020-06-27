import { InstitutionEntity } from '../..';
import { BaseResponseDto } from '../baseResponse.dto';
export declare class GetInstitutionTypeDto extends BaseResponseDto {
    name: string;
    description: string;
}
export declare class GetInstitutionTypeWithRelationsDto extends GetInstitutionTypeDto {
    institutions?: InstitutionEntity[];
}
export declare const serialize: {
    get: typeof GetInstitutionTypeWithRelationsDto;
    create: typeof GetInstitutionTypeDto;
};
