import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { InstitutionalItemEntity } from '../institutionalItem/institutionalItem.entity';
import { TagEntity } from '../tag/tag.entity';
import { CategoryEntity } from '../category/category.entity';
import { InstitutionMemberEntity } from '../institutionMember/institutionMember.entity';

@Entity('institutionalOffers')
export class InstitutionalOfferEntity extends InstitutionalItemEntity {
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

  @ManyToOne(
    () => InstitutionMemberEntity,
    (author) => author.institutionalOffersAsAuthor
  )
  @JoinColumn()
  author: InstitutionMemberEntity;

  @ManyToOne(
    () => InstitutionMemberEntity,
    (contactPerson) => contactPerson.institutionalOffersAsContactPerson
  )
  @JoinColumn()
  contactPerson?: InstitutionMemberEntity;
}
