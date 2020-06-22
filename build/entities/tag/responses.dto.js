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
exports.tagJoin = exports.tagSerialize = exports.GetTagWithRelationsDto = exports.GetTagDto = void 0;
var baseResponse_dto_1 = require("../baseResponse.dto");
var swagger_1 = require("@nestjs/swagger");
var institutionalOffer_entity_1 = require("../institutionalOffer/institutionalOffer.entity");
var institutionalRequest_entity_1 = require("../institutionalRequest/institutionalRequest.entity");
var privateOffer_entity_1 = require("../privateOffer/privateOffer.entity");
var privateRequest_entity_1 = require("../privateRequest/privateRequest.entity");
var institutionalMatchingProfile_entity_1 = require("../institutionalMatchingProfile/institutionalMatchingProfile.entity");
var privateMatchingProfile_entity_1 = require("../privateMatchingProfile/privateMatchingProfile.entity");
var GetTagDto = /** @class */ (function (_super) {
    __extends(GetTagDto, _super);
    function GetTagDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        __metadata("design:type", String)
    ], GetTagDto.prototype, "name", void 0);
    return GetTagDto;
}(baseResponse_dto_1.BaseResponseDto));
exports.GetTagDto = GetTagDto;
var GetTagWithRelationsDto = /** @class */ (function (_super) {
    __extends(GetTagWithRelationsDto, _super);
    function GetTagWithRelationsDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: institutionalOffer_entity_1.InstitutionalOfferEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetTagWithRelationsDto.prototype, "institutionalOffers", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: institutionalRequest_entity_1.InstitutionalRequestEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetTagWithRelationsDto.prototype, "institutionalRequests", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: privateOffer_entity_1.PrivateOfferEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetTagWithRelationsDto.prototype, "privateOffers", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: privateRequest_entity_1.PrivateRequestEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetTagWithRelationsDto.prototype, "privateRequests", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: institutionalMatchingProfile_entity_1.InstitutionalMatchingProfileEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetTagWithRelationsDto.prototype, "institutionalMatchingProfiles", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: privateMatchingProfile_entity_1.PrivateMatchingProfileEntity, isArray: true, required: false }),
        __metadata("design:type", Array)
    ], GetTagWithRelationsDto.prototype, "privateMatchingProfiles", void 0);
    return GetTagWithRelationsDto;
}(GetTagDto));
exports.GetTagWithRelationsDto = GetTagWithRelationsDto;
exports.tagSerialize = {
    get: GetTagWithRelationsDto,
    create: GetTagDto
};
exports.tagJoin = {
    institutionalOffers: {},
    institutionalRequests: {},
    privateOffers: {},
    privateRequests: {},
    institutionalMatchingProfiles: {},
    privateMatchingProfiles: {}
};
