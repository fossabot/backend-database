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
exports.InstitutionalRequestEntity = void 0;
var typeorm_1 = require("typeorm");
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
var __4 = require("../..");
var __5 = require("../..");
var __6 = require("../..");
var InstitutionalRequestEntity = /** @class */ (function (_super) {
    __extends(InstitutionalRequestEntity, _super);
    function InstitutionalRequestEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToMany(function () { return __3.CategoryEntity; }, function (category) { return category.institutionalRequests; }),
        typeorm_1.JoinTable({
            name: 'institutionalRequests_categories',
            joinColumn: {
                name: 'institutionalRequest',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], InstitutionalRequestEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return __2.TagEntity; }, function (tag) { return tag.institutionalRequests; }),
        typeorm_1.JoinTable({
            name: 'institutionalRequests_tags',
            joinColumn: {
                name: 'institutionalRequest',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'tag',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], InstitutionalRequestEntity.prototype, "tags", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return __5.InstitutionEntity; }, function (institution) { return institution.institutionalRequests; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __5.InstitutionEntity)
    ], InstitutionalRequestEntity.prototype, "institution", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return __4.InstitutionMemberEntity; }, function (author) { return author.institutionalRequestsAsAuthor; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __4.InstitutionMemberEntity)
    ], InstitutionalRequestEntity.prototype, "author", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return __4.InstitutionMemberEntity; }, function (contactPerson) { return contactPerson.institutionalRequestsAsContactPerson; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __4.InstitutionMemberEntity)
    ], InstitutionalRequestEntity.prototype, "contactPerson", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return __6.RewardDefinitionEntity; }, function (rewardDefinition) { return rewardDefinition.institutionalRequests; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __6.RewardDefinitionEntity)
    ], InstitutionalRequestEntity.prototype, "rewardDefinition", void 0);
    InstitutionalRequestEntity = __decorate([
        typeorm_1.Entity('institutionalRequests')
    ], InstitutionalRequestEntity);
    return InstitutionalRequestEntity;
}(__1.InstitutionalItemEntity));
exports.InstitutionalRequestEntity = InstitutionalRequestEntity;
