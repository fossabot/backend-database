import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../institution/institution.entity';
import { CategoryEntity } from '../category/category.entity';
import { TagEntity } from '../tag/tag.entity';
export declare class InstitutionalMatchingProfileEntity extends BaseEntity {
    radius?: number;
    additionalSkills?: string[];
    additionalInformation?: string;
    institutionId: string;
    institution: InstitutionEntity;
    categories?: CategoryEntity[];
    tags?: TagEntity[];
}
