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
exports.InstitutionEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var __1 = require("../..");
var class_transformer_1 = require("class-transformer");
var InstitutionEntity = /** @class */ (function () {
    function InstitutionEntity() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'uuid' }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], InstitutionEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionEntity.prototype, "institutionTypeId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionEntity.prototype, "institutionAdminId", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsArray(),
        class_transformer_1.Type(function () { return __1.CategoryEntity; }),
        typeorm_1.ManyToMany(function () { return __1.CategoryEntity; }, function (category) { return category.institutions; }, {
            cascade: true
        }),
        typeorm_1.JoinTable({
            name: 'institutions_categories',
            joinColumn: {
                name: 'institution',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], InstitutionEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return __1.InstitutionTypeEntity; }, function (institutionType) { return institutionType.institutions; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __1.InstitutionTypeEntity)
    ], InstitutionEntity.prototype, "institutionType", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.InstitutionAdminEntity; }, function (institutionAdmin) { return institutionAdmin.institution; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __1.InstitutionAdminEntity)
    ], InstitutionEntity.prototype, "institutionAdmin", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.AddressEntity; }, { cascade: true }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __1.AddressEntity)
    ], InstitutionEntity.prototype, "address", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __1.InstitutionalOfferEntity; }, function (institutionalOffer) { return institutionalOffer.institution; }),
        __metadata("design:type", Array)
    ], InstitutionEntity.prototype, "institutionalOffers", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __1.InstitutionalRequestEntity; }, function (institutionalRequest) { return institutionalRequest.institution; }),
        __metadata("design:type", Array)
    ], InstitutionEntity.prototype, "institutionalRequests", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __1.RewardRecordEntity; }, function (rewardRecord) { return rewardRecord.verifyingInstitution; }),
        __metadata("design:type", __1.RewardRecordEntity)
    ], InstitutionEntity.prototype, "verifiedRewardRecords", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.InstitutionalMatchingProfileEntity; }, function (matchingProfile) { return matchingProfile.institution; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __1.InstitutionalMatchingProfileEntity)
    ], InstitutionEntity.prototype, "matchingProfile", void 0);
    InstitutionEntity = __decorate([
        typeorm_1.Entity('institutions')
    ], InstitutionEntity);
    return InstitutionEntity;
}());
exports.InstitutionEntity = InstitutionEntity;
