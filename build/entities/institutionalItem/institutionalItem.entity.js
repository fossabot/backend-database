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
exports.InstitutionalItemEntity = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var base_entity_1 = require("../base.entity");
var address_entity_1 = require("../address/address.entity");
var InstitutionalItemEntity = /** @class */ (function (_super) {
    __extends(InstitutionalItemEntity, _super);
    function InstitutionalItemEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column('int'),
        class_validator_1.IsOptional(),
        class_validator_1.IsInt(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], InstitutionalItemEntity.prototype, "capacity", void 0);
    __decorate([
        typeorm_1.Column('int'),
        class_validator_1.IsOptional(),
        class_validator_1.IsInt(),
        class_validator_1.IsPositive(),
        __metadata("design:type", Number)
    ], InstitutionalItemEntity.prototype, "frequency", void 0);
    __decorate([
        typeorm_1.Column('date'),
        class_validator_1.IsOptional(),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], InstitutionalItemEntity.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column('time with time zone'),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "startTime", void 0);
    __decorate([
        typeorm_1.Column('time with time zone'),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "endTime", void 0);
    __decorate([
        typeorm_1.Column('point'),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", Object)
    ], InstitutionalItemEntity.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "institutionId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "authorId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsOptional(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "contactPersonId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "rewardDefinitionId", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsOptional(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], InstitutionalItemEntity.prototype, "addressId", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return address_entity_1.AddressEntity; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", address_entity_1.AddressEntity)
    ], InstitutionalItemEntity.prototype, "address", void 0);
    return InstitutionalItemEntity;
}(base_entity_1.BaseEntity));
exports.InstitutionalItemEntity = InstitutionalItemEntity;
