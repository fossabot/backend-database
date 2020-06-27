import { Gender } from '../..';
export declare class GetInstitutionAdminDto {
    id: string;
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob?: Date;
    biography?: string;
}
export declare class GetInstitutionAdminPublicDto {
    name: string;
    email: string;
}
