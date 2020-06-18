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
exports.CategoryEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var institution_entity_1 = require("../institution/institution.entity");
var base_entity_1 = require("../base.entity");
var institutionalOffer_entity_1 = require("../institutionalOffer/institutionalOffer.entity");
var institutionalRequest_entity_1 = require("../institutionalRequest/institutionalRequest.entity");
var privateOffer_entity_1 = require("../privateOffer/privateOffer.entity");
var privateRequest_entity_1 = require("../privateRequest/privateRequest.entity");
var rewardDefinition_entity_1 = require("../rewardDefinition/rewardDefinition.entity");
var institutionalMatchingProfile_entity_1 = require("../institutionalMatchingProfile/institutionalMatchingProfile.entity");
var privateMatchingProfile_entity_1 = require("../privateMatchingProfile/privateMatchingProfile.entity");
var CategoryEntity = /** @class */ (function (_super) {
    __extends(CategoryEntity, _super);
    function CategoryEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CategoryEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CategoryEntity.prototype, "description", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return institution_entity_1.InstitutionEntity; }, function (institution) { return institution.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "institutions", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return institutionalOffer_entity_1.InstitutionalOfferEntity; }, function (institutionalOffer) { return institutionalOffer.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "institutionalOffers", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return institutionalRequest_entity_1.InstitutionalRequestEntity; }, function (institutionalRequest) { return institutionalRequest.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "institutionalRequests", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return privateOffer_entity_1.PrivateOfferEntity; }, function (privateOffer) { return privateOffer.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "privateOffers", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return privateRequest_entity_1.PrivateRequestEntity; }, function (privateRequest) { return privateRequest.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "privateRequests", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return rewardDefinition_entity_1.RewardDefinitionEntity; }, function (rewardDefinition) { return rewardDefinition.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "rewardDefinitions", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return institutionalMatchingProfile_entity_1.InstitutionalMatchingProfileEntity; }, function (institutionalMatchingProfile) { return institutionalMatchingProfile.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "institutionalMatchingProfiles", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return privateMatchingProfile_entity_1.PrivateMatchingProfileEntity; }, function (privateMatchingProfile) { return privateMatchingProfile.categories; }),
        __metadata("design:type", Array)
    ], CategoryEntity.prototype, "privateMatchingProfiles", void 0);
    CategoryEntity = __decorate([
        typeorm_1.Entity('categories')
    ], CategoryEntity);
    return CategoryEntity;
}(base_entity_1.BaseEntity));
exports.CategoryEntity = CategoryEntity;
