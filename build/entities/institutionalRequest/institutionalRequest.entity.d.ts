import { InstitutionalItemEntity } from '../institutionalItem/institutionalItem.entity';
import { TagEntity } from '../tag/tag.entity';
import { CategoryEntity } from '../category/category.entity';
import { InstitutionMemberEntity } from '../institutionMember/institutionMember.entity';
import { InstitutionEntity } from '../institution/institution.entity';
import { RewardDefinitionEntity } from '../rewardDefinition/rewardDefinition.entity';
export declare class InstitutionalRequestEntity extends InstitutionalItemEntity {
    categories: CategoryEntity[];
    tags?: TagEntity[];
    institution: InstitutionEntity;
    author: InstitutionMemberEntity;
    contactPerson?: InstitutionMemberEntity;
    rewardDefinition: RewardDefinitionEntity;
}
