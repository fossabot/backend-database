import { InstitutionalOfferEntity } from '../..';
import { InstitutionalRequestEntity } from '../..';
export declare class InstitutionMemberEntity {
    id: string;
    institutionalOffersAsAuthor: InstitutionalOfferEntity[];
    institutionalOffersAsContactPerson: InstitutionalOfferEntity[];
    institutionalRequestsAsAuthor: InstitutionalRequestEntity[];
    institutionalRequestsAsContactPerson: InstitutionalRequestEntity[];
}
