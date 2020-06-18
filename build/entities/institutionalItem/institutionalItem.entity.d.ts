import { BaseEntity } from '../base.entity';
import { AddressEntity } from '../..';
export declare abstract class InstitutionalItemEntity extends BaseEntity {
    title: string;
    description: string;
    capacity?: number;
    frequency?: number;
    date?: Date;
    startTime?: string;
    endTime?: string;
    location?: string | Object;
    institutionId: string;
    authorId: string;
    contactPersonId?: string;
    rewardDefinitionId: string;
    addressId?: string;
    address?: AddressEntity;
}
