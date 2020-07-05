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
exports.CreateInstitutionDto = exports.CreateInstitutionInternalDto = exports.CreateInstitutionFusionAuthDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var __1 = require("../..");
var class_transformer_1 = require("class-transformer");
var CreateInstitutionFusionAuthDto = /** @class */ (function () {
    function CreateInstitutionFusionAuthDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateInstitutionFusionAuthDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateInstitutionFusionAuthDto.prototype, "description", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'email' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateInstitutionFusionAuthDto.prototype, "contactEmail", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsPhoneNumber(null),
        __metadata("design:type", String)
    ], CreateInstitutionFusionAuthDto.prototype, "phoneNumber", void 0);
    return CreateInstitutionFusionAuthDto;
}());
exports.CreateInstitutionFusionAuthDto = CreateInstitutionFusionAuthDto;
var CreateInstitutionInternalDto = /** @class */ (function () {
    function CreateInstitutionInternalDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateInstitutionInternalDto.prototype, "institutionTypeId", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: __1.GetCategoryDto, isArray: true }),
        class_validator_1.IsArray(),
        class_transformer_1.Type(function () { return __1.GetCategoryDto; }),
        __metadata("design:type", Array)
    ], CreateInstitutionInternalDto.prototype, "categories", void 0);
    return CreateInstitutionInternalDto;
}());
exports.CreateInstitutionInternalDto = CreateInstitutionInternalDto;
var CreateInstitutionDto = /** @class */ (function () {
    function CreateInstitutionDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: __1.GetCategoryDto }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", CreateInstitutionInternalDto)
    ], CreateInstitutionDto.prototype, "internal", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: __1.GetCategoryDto }),
        class_validator_1.IsNotEmpty(),
        __metadata("design:type", CreateInstitutionFusionAuthDto)
    ], CreateInstitutionDto.prototype, "data", void 0);
    return CreateInstitutionDto;
}());
exports.CreateInstitutionDto = CreateInstitutionDto;
