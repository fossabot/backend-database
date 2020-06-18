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
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var __1 = require("../..");
var class_validator_1 = require("class-validator");
var __2 = require("../..");
var __3 = require("../..");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        typeorm_1.PrimaryColumn({ type: 'uuid' }),
        typeorm_1.Generated('uuid'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], UserEntity.prototype, "addressId", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.AddressEntity; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __1.AddressEntity)
    ], UserEntity.prototype, "address", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __3.PrivateMatchingProfileEntity; }, function (matchingProfile) { return matchingProfile.user; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __3.PrivateMatchingProfileEntity)
    ], UserEntity.prototype, "matchingProfile", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __2.PrivateOfferEntity; }, function (offer) { return offer.user; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "offers", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __2.PrivateOfferEntity; }, function (request) { return request.user; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "requests", void 0);
    UserEntity = __decorate([
        typeorm_1.Entity('users')
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
