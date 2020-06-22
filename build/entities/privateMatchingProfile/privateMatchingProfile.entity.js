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
exports.PrivateMatchingProfileEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base.entity");
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
var PrivateMatchingProfileEntity = /** @class */ (function (_super) {
    __extends(PrivateMatchingProfileEntity, _super);
    function PrivateMatchingProfileEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column('double precision'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsNumber(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], PrivateMatchingProfileEntity.prototype, "radius", void 0);
    __decorate([
        typeorm_1.Column('character varying', { array: true }),
        class_validator_1.IsArray(),
        __metadata("design:type", Array)
    ], PrivateMatchingProfileEntity.prototype, "additionalSkills", void 0);
    __decorate([
        typeorm_1.Column('text'),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PrivateMatchingProfileEntity.prototype, "additionalInformation", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], PrivateMatchingProfileEntity.prototype, "userId", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.UserEntity; }, function (user) { return user.privateMatchingProfile; }),
        __metadata("design:type", __1.UserEntity)
    ], PrivateMatchingProfileEntity.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return __2.CategoryEntity; }, function (category) { return category.privateMatchingProfiles; }),
        typeorm_1.JoinTable({
            name: 'privateMatchingProfiles_categories',
            joinColumn: {
                name: 'privateMatchingProfile',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'category',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], PrivateMatchingProfileEntity.prototype, "categories", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return __3.TagEntity; }, function (tag) { return tag.privateMatchingProfiles; }),
        typeorm_1.JoinTable({
            name: 'privateMatchingProfiles_tags',
            joinColumn: {
                name: 'privateMatchingProfile',
                referencedColumnName: 'id'
            },
            inverseJoinColumn: {
                name: 'tag',
                referencedColumnName: 'id'
            }
        }),
        __metadata("design:type", Array)
    ], PrivateMatchingProfileEntity.prototype, "tags", void 0);
    PrivateMatchingProfileEntity = __decorate([
        typeorm_1.Entity('privateMatchingProfiles')
    ], PrivateMatchingProfileEntity);
    return PrivateMatchingProfileEntity;
}(base_entity_1.BaseEntity));
exports.PrivateMatchingProfileEntity = PrivateMatchingProfileEntity;
