import { BaseEntity } from '../base.entity';
import { ClientType } from '../..';
import { ItemType } from '../..';
export declare class MatchingEntity extends BaseEntity {
    clientType: ClientType;
    clientId: string;
    itemType: ItemType;
    itemId: string;
    rewardReceiverType: ClientType;
    rewardReceiverId: string;
}
