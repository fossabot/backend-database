import { BaseEntity } from '../base.entity';
import { ClientType } from '../../enums/ClientType.enum';
import { ItemType } from '../../enums/ItemType.enum';
export declare class MatchingEntity extends BaseEntity {
    clientType: ClientType;
    clientId: string;
    itemType: ItemType;
    itemId: string;
    rewardReceiverType: ClientType;
    rewardReceiverId: string;
}
