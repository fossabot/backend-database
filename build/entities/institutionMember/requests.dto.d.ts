import { Gender } from '../..';
export declare class CreateInstitutionMemberDto {
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob?: Date;
    biography?: string;
    verified: boolean;
    job_title?: string;
}
