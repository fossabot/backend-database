import { BaseEntity } from '../base.entity';
import { UserEntity } from '../user/user.entity';
import { CategoryEntity } from '../category/category.entity';
import { TagEntity } from '../tag/tag.entity';
export declare class PrivateMatchingProfileEntity extends BaseEntity {
    radius: number;
    additionalSkills?: string[];
    additionalInformation?: string;
    userId: string;
    user: UserEntity;
    categories?: CategoryEntity[];
    tags?: TagEntity[];
}
