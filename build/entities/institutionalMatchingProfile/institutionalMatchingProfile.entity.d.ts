import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../..';
import { CategoryEntity } from '../..';
import { TagEntity } from '../..';
export declare class InstitutionalMatchingProfileEntity extends BaseEntity {
    radius?: number;
    additionalSkills?: string[];
    additionalInformation?: string;
    institutionId: string;
    institution: InstitutionEntity;
    categories?: CategoryEntity[];
    tags?: TagEntity[];
}
