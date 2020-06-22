import { BaseResponseDto } from '../baseResponse.dto';
import { ClientType } from '../../enums/ClientType.enum';
import { InstitutionEntity } from '../..';
import { MatchingEntity } from '../..';
export declare class GetRewardRecordDto extends BaseResponseDto {
    points: number;
    verified: boolean;
    receiverType: ClientType;
    rewardReceiverId: string;
}
export declare class GetRewardRecordWithRelationsDto extends GetRewardRecordDto {
    verifyingInstitution: InstitutionEntity;
    matching: MatchingEntity;
}
export declare const rewardRecordSerialize: {
    get: typeof GetRewardRecordWithRelationsDto;
    create: typeof GetRewardRecordDto;
};
export declare const rewardRecordJoin: {
    verifyingInstitution: {};
    matching: {};
};
