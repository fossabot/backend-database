import { BaseEntity } from '../base.entity';
import { CategoryEntity } from '../category/category.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
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
