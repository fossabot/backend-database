import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { AddressEntity, CategoryEntity, InstitutionAdminEntity, InstitutionalMatchingProfileEntity, InstitutionalOfferEntity, InstitutionalRequestEntity, InstitutionTypeEntity, RewardRecordEntity } from '../..';
import { Type } from 'class-transformer';

@Entity('institutions')
export class InstitutionEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionTypeId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionAdminId: string;

  /*
   * Relations
   * */
  @IsNotEmpty()
  @IsArray()
  @Type(() => CategoryEntity)
  @ManyToMany(() => CategoryEntity, (category) => category.institutions, {
    cascade: true
  })
  @JoinTable({
    name: 'institutions_categories',
    joinColumn: {
      name: 'institution',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToOne(() => InstitutionTypeEntity, (institutionType) => institutionType.institutions)
  @JoinColumn()
  institutionType: InstitutionTypeEntity;

  @OneToOne(() => InstitutionAdminEntity, (institutionAdmin) => institutionAdmin.institution)
  @JoinColumn()
  institutionAdmin: InstitutionAdminEntity;

  @OneToOne(() => AddressEntity)
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.institution)
  institutionalOffers?: InstitutionalOfferEntity[];

  @OneToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.institution)
  institutionalRequests?: InstitutionalRequestEntity[];

  @OneToMany(() => RewardRecordEntity, (rewardRecord) => rewardRecord.verifyingInstitution)
  verifiedRewardRecords?: RewardRecordEntity;

  @OneToOne(() => InstitutionalMatchingProfileEntity, (matchingProfile) => matchingProfile.institution)
  @JoinColumn()
  matchingProfile?: InstitutionalMatchingProfileEntity;
}
