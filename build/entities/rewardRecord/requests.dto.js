"use strict";
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
exports.rewardRecordDto = exports.CreateRewardRecordDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var ClientType_enum_1 = require("../../enums/ClientType.enum");
var class_transformer_1 = require("class-transformer");
var matching_entity_1 = require("../matching/matching.entity");
var institution_entity_1 = require("../institution/institution.entity");
var CreateRewardRecordDto = /** @class */ (function () {
    function CreateRewardRecordDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'number', format: 'double', minimum: 0, nullable: false }),
        class_validator_1.IsNumber(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], CreateRewardRecordDto.prototype, "points", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'boolean', default: false }),
        class_validator_1.IsBoolean(),
        __metadata("design:type", Boolean)
    ], CreateRewardRecordDto.prototype, "verified", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', enum: ClientType_enum_1.ClientType, nullable: false }),
        class_validator_1.IsEnum(ClientType_enum_1.ClientType),
        __metadata("design:type", String)
    ], CreateRewardRecordDto.prototype, "receiverType", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid', nullable: false }),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], CreateRewardRecordDto.prototype, "rewardReceiverId", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: matching_entity_1.MatchingEntity, nullable: false, required: true }),
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Type(function () { return matching_entity_1.MatchingEntity; }),
        __metadata("design:type", matching_entity_1.MatchingEntity)
    ], CreateRewardRecordDto.prototype, "matching", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: institution_entity_1.InstitutionEntity, nullable: true, required: false }),
        class_validator_1.IsOptional(),
        class_transformer_1.Type(function () { return institution_entity_1.InstitutionEntity; }),
        __metadata("design:type", institution_entity_1.InstitutionEntity)
    ], CreateRewardRecordDto.prototype, "verifyingInstitution", void 0);
    return CreateRewardRecordDto;
}());
exports.CreateRewardRecordDto = CreateRewardRecordDto;
exports.rewardRecordDto = {
    create: CreateRewardRecordDto
};
