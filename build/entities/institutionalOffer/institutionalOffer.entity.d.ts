import { InstitutionalItemEntity } from '../..';
import { TagEntity } from '../..';
import { CategoryEntity } from '../..';
import { InstitutionMemberEntity } from '../..';
import { InstitutionEntity } from '../..';
import { RewardDefinitionEntity } from '../..';
export declare class InstitutionalOfferEntity extends InstitutionalItemEntity {
    categories: CategoryEntity[];
    tags?: TagEntity[];
    institution: InstitutionEntity;
    author: InstitutionMemberEntity;
    contactPerson?: InstitutionMemberEntity;
    rewardDefinition: RewardDefinitionEntity;
}
