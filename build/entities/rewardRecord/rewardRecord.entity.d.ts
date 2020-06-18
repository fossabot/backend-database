import { BaseEntity } from '../base.entity';
import { ClientType } from '../..';
import { InstitutionEntity } from '../..';
import { MatchingEntity } from '../..';
export declare class RewardRecordEntity extends BaseEntity {
    points: number;
    verified: boolean;
    receiverType: ClientType;
    verifyingInstitutionId: string;
    rewardReceiverId: string;
    matchingId: string;
    verifyingInstitution: InstitutionEntity;
    matching?: MatchingEntity;
}
