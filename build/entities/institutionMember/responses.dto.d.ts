import { Gender } from '../../enums/Gender.enum';
export declare class GetInstitutionMemberDto {
    id: string;
    institution: string;
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob?: Date;
    biography?: string;
    verified: boolean;
    job_title?: string;
}
export declare class GetInstitutionMemberPublicDto {
    name: string;
    email: string;
}
