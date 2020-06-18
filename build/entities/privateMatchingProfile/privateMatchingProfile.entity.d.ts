import { BaseEntity } from '../base.entity';
import { UserEntity } from '../..';
import { CategoryEntity } from '../..';
import { TagEntity } from '../..';
export declare class PrivateMatchingProfileEntity extends BaseEntity {
    radius: number;
    additionalSkills?: string[];
    additionalInformation?: string;
    userId: string;
    user: UserEntity;
    categories?: CategoryEntity[];
    tags?: TagEntity[];
}
