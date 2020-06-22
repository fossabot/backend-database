"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJoin = exports.userSerialize = exports.GetUserWithRelationsDto = exports.GetUserDto = void 0;
var baseResponse_dto_1 = require("../baseResponse.dto");
var swagger_1 = require("@nestjs/swagger");
var privateOffer_entity_1 = require("../privateOffer/privateOffer.entity");
var privateRequest_entity_1 = require("../privateRequest/privateRequest.entity");
var Gender_enum_1 = require("../../enums/Gender.enum");
var address_entity_1 = require("../address/address.entity");
var privateMatchingProfile_entity_1 = require("../privateMatchingProfile/privateMatchingProfile.entity");
var GetUserDto = /** @class */ (function (_super) {
    __extends(GetUserDto, _super);
    function GetUserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ enum: Gender_enum_1.Gender }),
        __metadata("design:type", String)
    ], GetUserDto.prototype, "gender", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        __metadata("design:type", String)
    ], GetUserDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        __metadata("design:type", String)
    ], GetUserDto.prototype, "username", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        __metadata("design:type", String)
    ], GetUserDto.prototype, "email", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'date' }),
        __metadata("design:type", Date)
    ], GetUserDto.prototype, "dob", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        __metadata("design:type", String)
    ], GetUserDto.prototype, "biography", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'boolean' }),
        __metadata("design:type", Boolean)
    ], GetUserDto.prototype, "verified", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        __metadata("design:type", String)
    ], GetUserDto.prototype, "phoneNumber", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: address_entity_1.AddressEntity, required: false }),
        __metadata("design:type", address_entity_1.AddressEntity)
    ], GetUserDto.prototype, "address", void 0);
    return GetUserDto;
}(baseResponse_dto_1.BaseResponseDto));
exports.GetUserDto = GetUserDto;
var GetUserWithRelationsDto = /** @class */ (function (_super) {
    __extends(GetUserWithRelationsDto, _super);
    function GetUserWithRelationsDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: privateMatchingProfile_entity_1.PrivateMatchingProfileEntity, required: false }),
        __metadata("design:type", privateMatchingProfile_entity_1.PrivateMatchingProfileEntity)
    ], GetUserWithRelationsDto.prototype, "privateMatchingProfile", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: privateOffer_entity_1.PrivateOfferEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetUserWithRelationsDto.prototype, "privateOffers", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: privateRequest_entity_1.PrivateRequestEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetUserWithRelationsDto.prototype, "privateRequests", void 0);
    return GetUserWithRelationsDto;
}(GetUserDto));
exports.GetUserWithRelationsDto = GetUserWithRelationsDto;
exports.userSerialize = {
    get: GetUserWithRelationsDto,
    create: GetUserDto
};
exports.userJoin = {
    address: {},
    privateOffers: {},
    privateRequests: {},
    privateMatchingProfile: {}
};
