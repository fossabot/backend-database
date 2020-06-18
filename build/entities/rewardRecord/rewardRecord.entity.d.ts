import { BaseEntity } from '../base.entity';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../institution/institution.entity';
import { MatchingEntity } from '../matching/matching.entity';
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
