import { Gender } from '../../enums/Gender.enum';
import { AddressEntity } from '../address/address.entity';
export declare class CreateUserDto {
    gender: Gender;
    name: string;
    username: string;
    email: string;
    dob: Date;
    biography: string;
    verified: boolean;
    phoneNumber: string;
    address: AddressEntity;
}
export declare const userDto: {
    create: typeof CreateUserDto;
};
