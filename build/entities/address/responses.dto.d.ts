import { BaseResponseDto } from '../baseResponse.dto';
export declare class GetAddressDto extends BaseResponseDto {
    street: string;
    number: string;
    addition?: string;
    postalCode: string;
    city: string;
    country: string;
}
