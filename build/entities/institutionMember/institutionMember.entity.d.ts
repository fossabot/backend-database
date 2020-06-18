import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
export declare class InstitutionMemberEntity {
    id: string;
    institutionalOffersAsAuthor: InstitutionalOfferEntity[];
    institutionalOffersAsContactPerson: InstitutionalOfferEntity[];
    institutionalRequestsAsAuthor: InstitutionalRequestEntity[];
    institutionalRequestsAsContactPerson: InstitutionalRequestEntity[];
}
