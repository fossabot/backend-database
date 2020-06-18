import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany } from 'typeorm';
import { InstitutionEntity } from '../..';
import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { RewardDefinitionEntity } from '../..';
import { InstitutionalMatchingProfileEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  /*
   * Relations
   * */
  @ManyToMany(() => InstitutionEntity, (institution) => institution.categories)
  institutions?: InstitutionEntity[];

  @ManyToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.categories)
  institutionalOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.categories)
  institutionalRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => PrivateOfferEntity, (privateOffer) => privateOffer.categories)
  privateOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => PrivateRequestEntity, (privateRequest) => privateRequest.categories)
  privateRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => RewardDefinitionEntity, (rewardDefinition) => rewardDefinition.categories)
  rewardDefinitions?: RewardDefinitionEntity[];

  @ManyToMany(() => InstitutionalMatchingProfileEntity, (institutionalMatchingProfile) => institutionalMatchingProfile.categories)
  institutionalMatchingProfiles?: InstitutionalMatchingProfileEntity[];

  @ManyToMany(() => PrivateMatchingProfileEntity, (privateMatchingProfile) => privateMatchingProfile.categories)
  privateMatchingProfiles?: PrivateMatchingProfileEntity[];
}
