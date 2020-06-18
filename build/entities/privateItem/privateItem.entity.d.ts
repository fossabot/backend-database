import { BaseEntity } from '../base.entity';
import { AddressEntity } from '../..';
export declare abstract class PrivateItemEntity extends BaseEntity {
    title: string;
    description: string;
    capacity?: number;
    frequency?: number;
    date?: Date;
    startTime?: string;
    endTime?: string;
    location?: string | Object;
    userId: string;
    rewardDefinitionId: string;
    addressId?: string;
    address?: AddressEntity;
}
