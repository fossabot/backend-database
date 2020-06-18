import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { InstitutionalItemEntity } from '../..';
import { TagEntity } from '../..';
import { CategoryEntity } from '../..';
import { InstitutionMemberEntity } from '../..';
import { InstitutionEntity } from '../..';
import { RewardDefinitionEntity } from '../..';

@Entity('institutionalOffers')
export class InstitutionalOfferEntity extends InstitutionalItemEntity {
  /*
   * Relations
   * */
  @ManyToMany(() => CategoryEntity, (category) => category.institutionalOffers)
  @JoinTable({
    name: 'institutionalOffers_categories',
    joinColumn: {
      name: 'institutionalOffer',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.institutionalOffers)
  @JoinTable({
    name: 'institutionalOffers_tags',
    joinColumn: {
      name: 'institutionalOffer',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag',
      referencedColumnName: 'id'
    }
  })
  tags?: TagEntity[];

  @ManyToOne(() => InstitutionEntity, (institution) => institution.institutionalOffers)
  @JoinColumn()
  institution: InstitutionEntity;

  @ManyToOne(() => InstitutionMemberEntity, (author) => author.institutionalOffersAsAuthor)
  @JoinColumn()
  author: InstitutionMemberEntity;

  @ManyToOne(() => InstitutionMemberEntity, (contactPerson) => contactPerson.institutionalOffersAsContactPerson)
  @JoinColumn()
  contactPerson?: InstitutionMemberEntity;

  @ManyToOne(() => RewardDefinitionEntity, (rewardDefinition) => rewardDefinition.institutionalOffers)
  @JoinColumn()
  rewardDefinition: RewardDefinitionEntity;
}
