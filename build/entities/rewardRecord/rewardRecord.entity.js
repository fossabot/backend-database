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
exports.RewardRecordEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base.entity");
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
var RewardRecordEntity = /** @class */ (function (_super) {
    __extends(RewardRecordEntity, _super);
    function RewardRecordEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column('double precision'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], RewardRecordEntity.prototype, "points", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsBoolean(),
        __metadata("design:type", Boolean)
    ], RewardRecordEntity.prototype, "verified", void 0);
    __decorate([
        typeorm_1.Column('enum', { enum: __1.ClientType }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(__1.ClientType),
        __metadata("design:type", String)
    ], RewardRecordEntity.prototype, "receiverType", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], RewardRecordEntity.prototype, "verifyingInstitutionId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], RewardRecordEntity.prototype, "rewardReceiverId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], RewardRecordEntity.prototype, "matchingId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return __2.InstitutionEntity; }, function (institution) { return institution.verifiedRewardRecords; }),
        __metadata("design:type", __2.InstitutionEntity)
    ], RewardRecordEntity.prototype, "verifyingInstitution", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __3.MatchingEntity; }),
        __metadata("design:type", __3.MatchingEntity)
    ], RewardRecordEntity.prototype, "matching", void 0);
    RewardRecordEntity = __decorate([
        typeorm_1.Entity('rewardRecord')
    ], RewardRecordEntity);
    return RewardRecordEntity;
}(base_entity_1.BaseEntity));
exports.RewardRecordEntity = RewardRecordEntity;
