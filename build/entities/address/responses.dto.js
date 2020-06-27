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
exports.GetAddressDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var baseResponse_dto_1 = require("../baseResponse.dto");
var GetAddressDto = /** @class */ (function (_super) {
    __extends(GetAddressDto, _super);
    function GetAddressDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsAlpha(),
        __metadata("design:type", String)
    ], GetAddressDto.prototype, "street", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsAlphanumeric(),
        __metadata("design:type", String)
    ], GetAddressDto.prototype, "number", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], GetAddressDto.prototype, "addition", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsAlphanumeric(),
        __metadata("design:type", String)
    ], GetAddressDto.prototype, "postalCode", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsAlpha(),
        __metadata("design:type", String)
    ], GetAddressDto.prototype, "city", void 0);
    __decorate([
        swagger_1.ApiProperty({ type: 'string' }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsAlpha(),
        __metadata("design:type", String)
    ], GetAddressDto.prototype, "country", void 0);
    return GetAddressDto;
}(baseResponse_dto_1.BaseResponseDto));
exports.GetAddressDto = GetAddressDto;
