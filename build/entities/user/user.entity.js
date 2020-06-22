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
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var Gender_enum_1 = require("../../enums/Gender.enum");
var __1 = require("../..");
var __2 = require("../..");
var __3 = require("../..");
var __4 = require("../..");
var base_entity_1 = require("../base.entity");
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column('enum', { enum: Gender_enum_1.Gender, nullable: false }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column('varchar', { nullable: false }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: "username", nullable: false, unique: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column('varchar', { name: "email", nullable: false, unique: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column('date', { nullable: true }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "dob", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "biography", void 0);
    __decorate([
        typeorm_1.Column('boolean', { default: false, nullable: false }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "verified", void 0);
    __decorate([
        typeorm_1.Column({ name: "phone_number", nullable: true }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "phoneNumber", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.AddressEntity; }, { nullable: false }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", __1.AddressEntity)
    ], UserEntity.prototype, "address", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __2.PrivateMatchingProfileEntity; }, function (matchingProfile) { return matchingProfile.user; }),
        __metadata("design:type", __2.PrivateMatchingProfileEntity)
    ], UserEntity.prototype, "privateMatchingProfile", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __3.PrivateOfferEntity; }, function (offer) { return offer.user; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "privateOffers", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return __4.PrivateRequestEntity; }, function (request) { return request.user; }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "privateRequests", void 0);
    UserEntity = __decorate([
        typeorm_1.Entity('users')
    ], UserEntity);
    return UserEntity;
}(base_entity_1.BaseEntity));
exports.UserEntity = UserEntity;
