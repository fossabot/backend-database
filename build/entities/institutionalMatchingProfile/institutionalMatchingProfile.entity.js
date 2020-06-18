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
exports.InstitutionalMatchingProfileEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base.entity");
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
var InstitutionalMatchingProfileEntity = /** @class */ (function (_super) {
    __extends(InstitutionalMatchingProfileEntity, _super);
    function InstitutionalMatchingProfileEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column('double precision'),
        class_validator_1.IsNumber(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], InstitutionalMatchingProfileEntity.prototype, "radius", void 0);
    __decorate([
        typeorm_1.Column('character varying', { array: true }),
        class_validator_1.IsArray(),
        __metadata("design:type", Array)
    ], InstitutionalMatchingProfileEntity.prototype, "additionalSkills", void 0);
    __decorate([
        typeorm_1.Column('text'),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], InstitutionalMatchingProfileEntity.prototype, "additionalInformation", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionalMatchingProfileEntity.prototype, "institutionId", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.InstitutionEntity; }, function (institution) { return institution.matchingProfile; }),
        __metadata("design:type", __1.InstitutionEntity)
    ], InstitutionalMatchingProfileEntity.prototype, "institution", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return __2.CategoryEntity; }, function (category) { return category.institutionalMatchingProfiles; }),
        typeorm_1.JoinTable({
            name: 'institutionalMatchingProfiles_categories',
            joinColumn: {
                name: 'institutionalMatchingProfile',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], InstitutionalMatchingProfileEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return __3.TagEntity; }, function (tag) { return tag.institutionalMatchingProfiles; }),
        typeorm_1.JoinTable({
            name: 'institutionalMatchingProfiles_tags',
            joinColumn: {
                name: 'institutionalMatchingProfile',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'tag',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], InstitutionalMatchingProfileEntity.prototype, "tags", void 0);
    InstitutionalMatchingProfileEntity = __decorate([
        typeorm_1.Entity('institutionalMatchingProfiles')
    ], InstitutionalMatchingProfileEntity);
    return InstitutionalMatchingProfileEntity;
}(base_entity_1.BaseEntity));
exports.InstitutionalMatchingProfileEntity = InstitutionalMatchingProfileEntity;
