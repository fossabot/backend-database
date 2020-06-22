import { BaseEntity } from '../base.entity';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../..';
import { MatchingEntity } from '../..';
export declare class RewardRecordEntity extends BaseEntity {
    points: number;
    verified: boolean;
    receiverType: ClientType;
    rewardReceiverId: string;
    verifyingInstitution: InstitutionEntity;
    matching: MatchingEntity;
}
