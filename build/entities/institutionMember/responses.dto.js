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
exports.GetInstitutionMemberPublicDto = exports.GetInstitutionMemberDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var Gender_enum_1 = require("../../enums/Gender.enum");
var GetInstitutionMemberDto = /** @class */ (function () {
    function GetInstitutionMemberDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        class_validator_1.IsString(),
        class_validator_1.IsUUID(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "id", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "institution", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: Gender_enum_1.Gender }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(Gender_enum_1.Gender),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "gender", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "username", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'email' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "email", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'date', required: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], GetInstitutionMemberDto.prototype, "dob", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', required: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "biography", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'boolean' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsBoolean(),
        __metadata("design:type", Boolean)
    ], GetInstitutionMemberDto.prototype, "verified", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', required: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionMemberDto.prototype, "job_title", void 0);
    return GetInstitutionMemberDto;
}());
exports.GetInstitutionMemberDto = GetInstitutionMemberDto;
var GetInstitutionMemberPublicDto = /** @class */ (function () {
    function GetInstitutionMemberPublicDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionMemberPublicDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'email' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], GetInstitutionMemberPublicDto.prototype, "email", void 0);
    return GetInstitutionMemberPublicDto;
}());
exports.GetInstitutionMemberPublicDto = GetInstitutionMemberPublicDto;
