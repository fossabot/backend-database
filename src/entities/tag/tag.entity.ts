import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { InstitutionalMatchingProfileEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';

@Entity('tags')
export class TagEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  /*
   * Relations
   * */
  @ManyToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.tags)
  institutionalOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.tags)
  institutionalRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => PrivateOfferEntity, (privateOffer) => privateOffer.tags)
  privateOffers?: PrivateOfferEntity[];

  @ManyToMany(() => PrivateRequestEntity, (privateRequest) => privateRequest.tags)
  privateRequests?: PrivateRequestEntity[];

  @ManyToMany(() => InstitutionalMatchingProfileEntity, (institutionalMatchingProfile) => institutionalMatchingProfile.tags)
  institutionalMatchingProfiles?: InstitutionalMatchingProfileEntity[];

  @ManyToMany(() => PrivateMatchingProfileEntity, (privateMatchingProfile) => privateMatchingProfile.tags)
  privateMatchingProfiles?: PrivateMatchingProfileEntity[];
}
