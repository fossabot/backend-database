import { TagEntity } from '../tag/tag.entity';
import { CategoryEntity } from '../category/category.entity';
import { PrivateItemEntity } from '../privateItem/privateItem.entity';
import { UserEntity } from '../user/user.entity';
import { RewardDefinitionEntity } from '../rewardDefinition/rewardDefinition.entity';
export declare class PrivateRequestEntity extends PrivateItemEntity {
    categories: CategoryEntity[];
    tags?: TagEntity[];
    user: UserEntity;
    rewardDefinition: RewardDefinitionEntity;
}
