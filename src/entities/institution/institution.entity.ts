import { IsArray, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, IsUUID} from 'class-validator';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { CategoryEntity } from '../..';
import { BaseEntity } from '../base.entity';
import { AddressEntity } from '../..';
import { InstitutionAdminEntity } from '../..';
import { InstitutionTypeEntity } from '../..';
import { InstitutionalOfferEntity } from '../..';
import { Type } from 'class-transformer';
import { InstitutionalRequestEntity } from '../..';
import { RewardRecordEntity } from '../..';
import { InstitutionalMatchingProfileEntity } from '../..';

@Entity('institutions')
export class InstitutionEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  contactEmail: string;

  @Column()
  @IsOptional()
  @IsNumberString()
  phoneNumber: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionTypeId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  institutionAdminId: string;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  addressId: string;

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
