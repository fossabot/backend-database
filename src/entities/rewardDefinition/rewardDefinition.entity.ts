import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { CategoryEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';

@Entity('rewardDefinitions')
export class RewardDefinitionEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Column('double precision')
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  points: number;

  @Column('uuid')
  @IsNotEmpty()
  @IsUUID('4')
  categoryId: string;

  /*
   * Relations
   * */
  @ManyToMany(() => CategoryEntity, (category) => category.rewardDefinitions, {
    cascade: true
  })
  @JoinTable({
    name: 'rewardDefinitions_categories',
    joinColumn: {
      name: 'rewardDefinition',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'category',
      referencedColumnName: 'id'
    }
  })
  categories: CategoryEntity[];

  @ManyToMany(() => InstitutionalOfferEntity, (institutionalOffer) => institutionalOffer.rewardDefinition)
  institutionalOffers?: InstitutionalOfferEntity[];

  @ManyToMany(() => InstitutionalRequestEntity, (institutionalRequest) => institutionalRequest.rewardDefinition)
  institutionalRequests?: InstitutionalRequestEntity[];

  @ManyToMany(() => PrivateOfferEntity, (privateOffer) => privateOffer.rewardDefinition)
  privateOffers?: PrivateOfferEntity[];

  @ManyToMany(() => PrivateRequestEntity, (privateRequest) => privateRequest.rewardDefinition)
  privateRequests?: PrivateRequestEntity[];
}
