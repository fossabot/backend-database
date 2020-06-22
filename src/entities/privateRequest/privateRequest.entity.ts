import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { TagEntity } from '../..';
import { CategoryEntity } from '../..';
import { PrivateItemEntity } from '../..';
import { UserEntity } from '../..';
import { RewardDefinitionEntity } from '../..';

@Entity('privateRequests')
export class PrivateRequestEntity extends PrivateItemEntity {
  /*
   * Relations
   * */
  @ManyToMany(() => CategoryEntity, (category) => category.privateRequests)
  @JoinTable({
    name: 'privateRequests_categories',
    joinColumn: {
      name: 'privateRequest',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.privateRequests)
  @JoinTable({
    name: 'privateRequests_tags',
    joinColumn: {
      name: 'privateRequest',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag',
      referencedColumnName: 'id'
    }
  })
  tags?: TagEntity[];

  @ManyToOne(() => UserEntity, (user) => user.privateRequests)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => RewardDefinitionEntity, (rewardDefinition) => rewardDefinition.privateRequests)
  @JoinColumn()
  rewardDefinition: RewardDefinitionEntity;
}
