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
exports.PrivateOfferEntity = void 0;
var typeorm_1 = require("typeorm");
var tag_entity_1 = require("../tag/tag.entity");
var category_entity_1 = require("../category/category.entity");
var privateItem_entity_1 = require("../privateItem/privateItem.entity");
var user_entity_1 = require("../user/user.entity");
var rewardDefinition_entity_1 = require("../rewardDefinition/rewardDefinition.entity");
var PrivateOfferEntity = /** @class */ (function (_super) {
    __extends(PrivateOfferEntity, _super);
    function PrivateOfferEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToMany(function () { return category_entity_1.CategoryEntity; }, function (category) { return category.privateOffers; }),
        typeorm_1.JoinTable({
            name: 'privateOffers_categories',
            joinColumn: {
                name: 'privateOffer',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], PrivateOfferEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return tag_entity_1.TagEntity; }, function (tag) { return tag.privateOffers; }),
        typeorm_1.JoinTable({
            name: 'privateOffers_tags',
            joinColumn: {
                name: 'privateOffer',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'tag',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], PrivateOfferEntity.prototype, "tags", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.offers; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", user_entity_1.UserEntity)
    ], PrivateOfferEntity.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return rewardDefinition_entity_1.RewardDefinitionEntity; }, function (rewardDefinition) { return rewardDefinition.privateOffers; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", rewardDefinition_entity_1.RewardDefinitionEntity)
    ], PrivateOfferEntity.prototype, "rewardDefinition", void 0);
    PrivateOfferEntity = __decorate([
        typeorm_1.Entity('privateOffers')
    ], PrivateOfferEntity);
    return PrivateOfferEntity;
}(privateItem_entity_1.PrivateItemEntity));
exports.PrivateOfferEntity = PrivateOfferEntity;
