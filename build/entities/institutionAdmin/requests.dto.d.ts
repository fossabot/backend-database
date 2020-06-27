import { Gender } from '../..';
export declare class CreateInstitutionAdminDto {
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob?: Date;
    biography?: string;
}
