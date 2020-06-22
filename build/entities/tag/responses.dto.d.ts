import { BaseResponseDto } from '../baseResponse.dto';
import { InstitutionalOfferEntity } from '../institutionalOffer/institutionalOffer.entity';
import { InstitutionalRequestEntity } from '../institutionalRequest/institutionalRequest.entity';
import { PrivateOfferEntity } from '../privateOffer/privateOffer.entity';
import { PrivateRequestEntity } from '../privateRequest/privateRequest.entity';
import { InstitutionalMatchingProfileEntity } from '../institutionalMatchingProfile/institutionalMatchingProfile.entity';
import { PrivateMatchingProfileEntity } from '../privateMatchingProfile/privateMatchingProfile.entity';
export declare class GetTagDto extends BaseResponseDto {
    name: string;
}
export declare class GetTagWithRelationsDto extends GetTagDto {
    institutionalOffers: InstitutionalOfferEntity[];
    institutionalRequests: InstitutionalRequestEntity[];
    privateOffers: PrivateOfferEntity[];
    privateRequests: PrivateRequestEntity[];
    institutionalMatchingProfiles: InstitutionalMatchingProfileEntity[];
    privateMatchingProfiles: PrivateMatchingProfileEntity[];
}
export declare const tagSerialize: {
    get: typeof GetTagWithRelationsDto;
    create: typeof GetTagDto;
};
export declare const tagJoin: {
    institutionalOffers: {};
    institutionalRequests: {};
    privateOffers: {};
    privateRequests: {};
    institutionalMatchingProfiles: {};
    privateMatchingProfiles: {};
};
