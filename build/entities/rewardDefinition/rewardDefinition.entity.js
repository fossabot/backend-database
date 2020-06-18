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
exports.RewardDefinitionEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base.entity");
var category_entity_1 = require("../category/category.entity");
var privateOffer_entity_1 = require("../privateOffer/privateOffer.entity");
var privateRequest_entity_1 = require("../privateRequest/privateRequest.entity");
var institutionalOffer_entity_1 = require("../institutionalOffer/institutionalOffer.entity");
var institutionalRequest_entity_1 = require("../institutionalRequest/institutionalRequest.entity");
var RewardDefinitionEntity = /** @class */ (function (_super) {
    __extends(RewardDefinitionEntity, _super);
    function RewardDefinitionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], RewardDefinitionEntity.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], RewardDefinitionEntity.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column('double precision'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], RewardDefinitionEntity.prototype, "points", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], RewardDefinitionEntity.prototype, "categoryId", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return category_entity_1.CategoryEntity; }, function (category) { return category.rewardDefinitions; }, {
            cascade: true
        }),
        typeorm_1.JoinTable({
            name: 'rewardDefinitions_categories',
            joinColumn: {
                name: 'rewardDefinition',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], RewardDefinitionEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return institutionalOffer_entity_1.InstitutionalOfferEntity; }, function (institutionalOffer) { return institutionalOffer.rewardDefinition; }),
        __metadata("design:type", Array)
    ], RewardDefinitionEntity.prototype, "institutionalOffers", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return institutionalRequest_entity_1.InstitutionalRequestEntity; }, function (institutionalRequest) { return institutionalRequest.rewardDefinition; }),
        __metadata("design:type", Array)
    ], RewardDefinitionEntity.prototype, "institutionalRequests", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return privateOffer_entity_1.PrivateOfferEntity; }, function (privateOffer) { return privateOffer.rewardDefinition; }),
        __metadata("design:type", Array)
    ], RewardDefinitionEntity.prototype, "privateOffers", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return privateRequest_entity_1.PrivateRequestEntity; }, function (privateRequest) { return privateRequest.rewardDefinition; }),
        __metadata("design:type", Array)
    ], RewardDefinitionEntity.prototype, "privateRequests", void 0);
    RewardDefinitionEntity = __decorate([
        typeorm_1.Entity('rewardDefinitions')
    ], RewardDefinitionEntity);
    return RewardDefinitionEntity;
}(base_entity_1.BaseEntity));
exports.RewardDefinitionEntity = RewardDefinitionEntity;
