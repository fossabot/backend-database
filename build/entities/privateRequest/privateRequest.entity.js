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
exports.PrivateRequestEntity = void 0;
var typeorm_1 = require("typeorm");
var tag_entity_1 = require("../tag/tag.entity");
var category_entity_1 = require("../category/category.entity");
var privateItem_entity_1 = require("../privateItem/privateItem.entity");
var user_entity_1 = require("../user/user.entity");
var rewardDefinition_entity_1 = require("../rewardDefinition/rewardDefinition.entity");
var PrivateRequestEntity = /** @class */ (function (_super) {
    __extends(PrivateRequestEntity, _super);
    function PrivateRequestEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToMany(function () { return category_entity_1.CategoryEntity; }, function (category) { return category.privateRequests; }),
        typeorm_1.JoinTable({
            name: 'privateRequests_categories',
            joinColumn: {
                name: 'privateRequest',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], PrivateRequestEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return tag_entity_1.TagEntity; }, function (tag) { return tag.privateRequests; }),
        typeorm_1.JoinTable({
            name: 'privateRequests_tags',
            joinColumn: {
                name: 'privateRequest',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'tag',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], PrivateRequestEntity.prototype, "tags", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.UserEntity; }, function (user) { return user.requests; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", user_entity_1.UserEntity)
    ], PrivateRequestEntity.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return rewardDefinition_entity_1.RewardDefinitionEntity; }, function (rewardDefinition) { return rewardDefinition.privateRequests; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", rewardDefinition_entity_1.RewardDefinitionEntity)
    ], PrivateRequestEntity.prototype, "rewardDefinition", void 0);
    PrivateRequestEntity = __decorate([
        typeorm_1.Entity('privateRequests')
    ], PrivateRequestEntity);
    return PrivateRequestEntity;
}(privateItem_entity_1.PrivateItemEntity));
exports.PrivateRequestEntity = PrivateRequestEntity;
