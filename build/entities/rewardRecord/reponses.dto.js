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
exports.rewardRecordJoin = exports.rewardRecordSerialize = exports.GetRewardRecordWithRelationsDto = exports.GetRewardRecordDto = void 0;
var baseResponse_dto_1 = require("../baseResponse.dto");
var swagger_1 = require("@nestjs/swagger");
var ClientType_enum_1 = require("../../enums/ClientType.enum");
var __1 = require("../..");
var __2 = require("../..");
var GetRewardRecordDto = /** @class */ (function (_super) {
    __extends(GetRewardRecordDto, _super);
    function GetRewardRecordDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'number', format: 'double' }),
        __metadata("design:type", Number)
    ], GetRewardRecordDto.prototype, "points", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'boolean' }),
        __metadata("design:type", Boolean)
    ], GetRewardRecordDto.prototype, "verified", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'enum', enum: ClientType_enum_1.ClientType }),
        __metadata("design:type", String)
    ], GetRewardRecordDto.prototype, "receiverType", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        __metadata("design:type", String)
    ], GetRewardRecordDto.prototype, "rewardReceiverId", void 0);
    return GetRewardRecordDto;
}(baseResponse_dto_1.BaseResponseDto));
exports.GetRewardRecordDto = GetRewardRecordDto;
var GetRewardRecordWithRelationsDto = /** @class */ (function (_super) {
    __extends(GetRewardRecordWithRelationsDto, _super);
    function GetRewardRecordWithRelationsDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: __1.InstitutionEntity, required: false }),
        __metadata("design:type", __1.InstitutionEntity)
    ], GetRewardRecordWithRelationsDto.prototype, "verifyingInstitution", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: __2.MatchingEntity, required: false }),
        __metadata("design:type", __2.MatchingEntity)
    ], GetRewardRecordWithRelationsDto.prototype, "matching", void 0);
    return GetRewardRecordWithRelationsDto;
}(GetRewardRecordDto));
exports.GetRewardRecordWithRelationsDto = GetRewardRecordWithRelationsDto;
exports.rewardRecordSerialize = {
    get: GetRewardRecordWithRelationsDto,
    create: GetRewardRecordDto
};
exports.rewardRecordJoin = {
    verifyingInstitution: {},
    matching: {}
};
