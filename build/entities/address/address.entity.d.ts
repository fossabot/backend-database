import { BaseEntity } from '../base.entity';
export declare class AddressEntity extends BaseEntity {
    street: string;
    number: string;
    addition?: string;
    postalCode: string;
    city: string;
    country: string;
}
