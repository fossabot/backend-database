import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Gender } from '../../enums/Gender.enum';
import { AddressEntity } from '../..';
import { PrivateMatchingProfileEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { BaseEntity } from '../base.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column('enum', { enum: Gender, nullable: false })
  gender: Gender;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { name: 'username', nullable: false, unique: true })
  username: string;

  @Column('varchar', { name: 'email', nullable: false, unique: true })
  email: string;

  @Column('date', { nullable: true })
  dob: Date;

  @Column('text', { nullable: true })
  biography: string;

  @Column('boolean', { default: false, nullable: false })
  verified: boolean;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  /*
   * Relations
   * */
  @OneToOne(() => AddressEntity, { nullable: false })
  @JoinColumn()
  address: AddressEntity;

  @OneToOne(() => PrivateMatchingProfileEntity, (matchingProfile) => matchingProfile.user)
  privateMatchingProfile: PrivateMatchingProfileEntity;

  @OneToMany(() => PrivateOfferEntity, (offer) => offer.user)
  privateOffers: PrivateOfferEntity[];

  @OneToMany(() => PrivateRequestEntity, (request) => request.user)
  privateRequests: PrivateRequestEntity[];
}
