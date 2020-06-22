import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../..';
import { MatchingEntity } from '../..';

@Entity('rewardRecord')
export class RewardRecordEntity extends BaseEntity {
  @Column({type: 'double precision', nullable: false})
  points: number;

  @Column({default: false, nullable: false})
  verified: boolean;

  @Column('enum', { enum: ClientType, nullable: false})
  receiverType: ClientType;

  @Column({type: 'uuid', nullable: false})
  rewardReceiverId: string;

  /*
   * Relations
   * */
  @ManyToOne(() => InstitutionEntity, (institution) => institution.verifiedRewardRecords)
  verifyingInstitution: InstitutionEntity;

  @OneToOne(() => MatchingEntity, matching => matching.rewardRecord)
  @JoinColumn()
  matching: MatchingEntity;
}
