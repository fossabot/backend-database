import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { InstitutionalItemEntity } from '../institutionalItem/institutionalItem.entity';
import { TagEntity } from '../tag/tag.entity';
import { CategoryEntity } from '../category/category.entity';
import { InstitutionMemberEntity } from '../institutionMember/institutionMember.entity';

@Entity('institutionalRequests')
export class InstitutionalRequestEntity extends InstitutionalItemEntity {
  @ManyToMany(
    () => CategoryEntity,
    (category) => category.institutionalRequests
  )
  @JoinTable({
    name: 'institutionalRequests_categories',
    joinColumn: {
      name: 'institutionalRequest',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.institutionalRequests)
  @JoinTable({
    name: 'institutionalRequests_tags',
    joinColumn: {
      name: 'institutionalRequest',
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
    (author) => author.institutionalRequestsAsAuthor
  )
  @JoinColumn()
  author: InstitutionMemberEntity;

  @ManyToOne(
    () => InstitutionMemberEntity,
    (contactPerson) => contactPerson.institutionalRequestsAsContactPerson
  )
  @JoinColumn()
  contactPerson?: InstitutionMemberEntity;
}
