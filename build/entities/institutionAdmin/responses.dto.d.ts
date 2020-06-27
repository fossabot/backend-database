import { Gender } from '../..';
import { BaseResponseDto } from '../baseResponse.dto';
export declare class GetInstitutionAdminDto {
    id: string;
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob?: Date;
    biography?: string;
}
export declare class GetInstitutionAdminPublicDto extends BaseResponseDto {
    name: string;
    email: string;
}
