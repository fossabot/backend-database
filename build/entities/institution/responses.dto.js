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
exports.GetInstitutionDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var __1 = require("../..");
var baseResponse_dto_1 = require("../baseResponse.dto");
var responses_dto_1 = require("../institutionAdmin/responses.dto");
var responses_dto_2 = require("../institutionType/responses.dto");
var responses_dto_3 = require("../address/responses.dto");
var GetInstitutionDto = /** @class */ (function (_super) {
    __extends(GetInstitutionDto, _super);
    function GetInstitutionDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "description", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'email' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "contactEmail", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', required: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsPhoneNumber(null),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "phoneNumber", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "institutionTypeId", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "institutionAdminId", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], GetInstitutionDto.prototype, "addressId", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: responses_dto_2.GetInstitutionTypeDto }),
        class_validator_1.IsOptional(),
        class_validator_1.IsArray(),
        class_transformer_1.Type(function () { return responses_dto_2.GetInstitutionTypeDto; }),
        __metadata("design:type", Array)
    ], GetInstitutionDto.prototype, "institutionType", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: responses_dto_1.GetInstitutionAdminPublicDto }),
        class_validator_1.IsOptional(),
        class_transformer_1.Type(function () { return responses_dto_1.GetInstitutionAdminPublicDto; }),
        __metadata("design:type", responses_dto_1.GetInstitutionAdminPublicDto)
    ], GetInstitutionDto.prototype, "institutionAdmin", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: responses_dto_3.GetAddressDto }),
        class_validator_1.IsOptional(),
        class_transformer_1.Type(function () { return responses_dto_3.GetAddressDto; }),
        __metadata("design:type", responses_dto_3.GetAddressDto)
    ], GetInstitutionDto.prototype, "address", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: __1.GetCategoryDto }),
        class_validator_1.IsOptional(),
        class_validator_1.IsArray(),
        class_transformer_1.Type(function () { return __1.GetCategoryDto; }),
        __metadata("design:type", Array)
    ], GetInstitutionDto.prototype, "categories", void 0);
    return GetInstitutionDto;
}(baseResponse_dto_1.BaseResponseDto));
exports.GetInstitutionDto = GetInstitutionDto;
