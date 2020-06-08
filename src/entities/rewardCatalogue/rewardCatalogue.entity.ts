import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';

@Entity('rewardCatalogue')
export class RewardCatalogueEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;
}
