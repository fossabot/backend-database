import { ClientType } from '../../enums/ClientType.enum';
import { MatchingEntity } from '../matching/matching.entity';
import { InstitutionEntity } from '../institution/institution.entity';
export declare class CreateRewardRecordDto {
    points: number;
    verified: boolean;
    receiverType: ClientType;
    rewardReceiverId: string;
    matching: MatchingEntity;
    verifyingInstitution: InstitutionEntity;
}
export declare const rewardRecordDto: {
    create: typeof CreateRewardRecordDto;
};
