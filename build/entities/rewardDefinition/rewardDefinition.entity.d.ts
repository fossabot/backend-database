import { BaseEntity } from '../base.entity';
import { CategoryEntity } from '../..';
import { PrivateOfferEntity } from '../..';
import { PrivateRequestEntity } from '../..';
import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
export declare class RewardDefinitionEntity extends BaseEntity {
    title: string;
    description: string;
    points: number;
    categoryId: string;
    categories: CategoryEntity[];
    institutionalOffers?: InstitutionalOfferEntity[];
    institutionalRequests?: InstitutionalRequestEntity[];
    privateOffers?: PrivateOfferEntity[];
    privateRequests?: PrivateRequestEntity[];
}
