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
exports.userDto = exports.CreateUserDto = void 0;
var class_validator_1 = require("class-validator");
var Gender_enum_1 = require("../../enums/Gender.enum");
var address_entity_1 = require("../address/address.entity");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string', enum: Gender_enum_1.Gender, nullable: false }),
        class_validator_1.IsEnum(Gender_enum_1.Gender),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "gender", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', nullable: false }),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', nullable: false }),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "username", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', nullable: false }),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "email", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'date', nullable: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsDate(),
        class_validator_1.MaxDate(new Date()),
        class_transformer_1.Type(function () { return Date; }),
        __metadata("design:type", Date)
    ], CreateUserDto.prototype, "dob", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "biography", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'boolean', default: false, nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean(),
        __metadata("design:type", Boolean)
    ], CreateUserDto.prototype, "verified", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', name: 'phone_number', nullable: true }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "phoneNumber", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: address_entity_1.AddressEntity, nullable: false, required: true }),
        class_validator_1.IsNotEmpty(),
        class_transformer_1.Type(function () { return address_entity_1.AddressEntity; }),
        __metadata("design:type", address_entity_1.AddressEntity)
    ], CreateUserDto.prototype, "address", void 0);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
exports.userDto = {
    create: CreateUserDto
};
