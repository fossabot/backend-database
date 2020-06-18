import { TagEntity } from '../..';
import { CategoryEntity } from '../..';
import { PrivateItemEntity } from '../..';
import { UserEntity } from '../..';
import { RewardDefinitionEntity } from '../..';
export declare class PrivateOfferEntity extends PrivateItemEntity {
    categories: CategoryEntity[];
    tags?: TagEntity[];
    user: UserEntity;
    rewardDefinition: RewardDefinitionEntity;
}
