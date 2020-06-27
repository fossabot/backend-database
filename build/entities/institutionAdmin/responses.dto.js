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
exports.GetInstitutionAdminPublicDto = exports.GetInstitutionAdminDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var __1 = require("../..");
var baseResponse_dto_1 = require("../baseResponse.dto");
var GetInstitutionAdminDto = /** @class */ (function () {
    function GetInstitutionAdminDto() {
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'uuid' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], GetInstitutionAdminDto.prototype, "id", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: __1.Gender }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(__1.Gender),
        __metadata("design:type", String)
    ], GetInstitutionAdminDto.prototype, "gender", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionAdminDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionAdminDto.prototype, "username", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'email' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], GetInstitutionAdminDto.prototype, "email", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'date', required: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], GetInstitutionAdminDto.prototype, "dob", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', required: false }),
        class_validator_1.IsOptional(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], GetInstitutionAdminDto.prototype, "biography", void 0);
    return GetInstitutionAdminDto;
}());
exports.GetInstitutionAdminDto = GetInstitutionAdminDto;
var GetInstitutionAdminPublicDto = /** @class */ (function (_super) {
    __extends(GetInstitutionAdminPublicDto, _super);
    function GetInstitutionAdminPublicDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetInstitutionAdminPublicDto.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string', format: 'email' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], GetInstitutionAdminPublicDto.prototype, "email", void 0);
    return GetInstitutionAdminPublicDto;
}(baseResponse_dto_1.BaseResponseDto));
exports.GetInstitutionAdminPublicDto = GetInstitutionAdminPublicDto;
