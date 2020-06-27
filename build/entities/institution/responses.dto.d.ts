import { GetCategoryDto } from '../..';
import { BaseResponseDto } from '../baseResponse.dto';
import { GetInstitutionAdminPublicDto } from '../institutionAdmin/responses.dto';
import { GetInstitutionTypeDto } from '../institutionType/responses.dto';
import { GetAddressDto } from '../address/responses.dto';
export declare class GetInstitutionDto extends BaseResponseDto {
    name: string;
    description: string;
    contactEmail: string;
    phoneNumber?: string;
    institutionTypeId: string;
    institutionAdminId: string;
    addressId: string;
    institutionType?: GetInstitutionTypeDto[];
    institutionAdmin?: GetInstitutionAdminPublicDto;
    address?: GetAddressDto;
    categories?: GetCategoryDto[];
}
