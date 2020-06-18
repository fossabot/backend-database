import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../..';
import { CategoryEntity } from '../..';
import { TagEntity } from '../..';

@Entity('institutionalMatchingProfiles')
export class InstitutionalMatchingProfileEntity extends BaseEntity {
  @Column('double precision')
  @IsNumber()
  @IsPositive()
  radius?: number;

  @Column('character varying', { array: true })
  @IsArray()
  additionalSkills?: string[];

  @Column('text')
  @IsString()
  additionalInformation?: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionId: string;

  /*
   * Relations
   * */
  @OneToOne(() => InstitutionEntity, (institution) => institution.matchingProfile)
  institution: InstitutionEntity;

  @ManyToMany(() => CategoryEntity, (category) => category.institutionalMatchingProfiles)
  @JoinTable({
    name: 'institutionalMatchingProfiles_categories',
    joinColumn: {
      name: 'institutionalMatchingProfile',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories?: CategoryEntity[];

  @ManyToMany(() => TagEntity, (tag) => tag.institutionalMatchingProfiles)
  @JoinTable({
    name: 'institutionalMatchingProfiles_tags',
    joinColumn: {
      name: 'institutionalMatchingProfile',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag',
      referencedColumnName: 'id'
    }
  })
  tags?: TagEntity[];
}
