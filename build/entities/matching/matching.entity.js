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
exports.MatchingEntity = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../base.entity");
var ClientType_enum_1 = require("../../enums/ClientType.enum");
var ItemType_enum_1 = require("../../enums/ItemType.enum");
var __1 = require("../..");
var MatchingEntity = /** @class */ (function (_super) {
    __extends(MatchingEntity, _super);
    function MatchingEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column('enum', { enum: ClientType_enum_1.ClientType }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(ClientType_enum_1.ClientType),
        __metadata("design:type", String)
    ], MatchingEntity.prototype, "clientType", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], MatchingEntity.prototype, "clientId", void 0);
    __decorate([
        typeorm_1.Column('enum', { enum: ItemType_enum_1.ItemType }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(ItemType_enum_1.ItemType),
        __metadata("design:type", String)
    ], MatchingEntity.prototype, "itemType", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], MatchingEntity.prototype, "itemId", void 0);
    __decorate([
        typeorm_1.Column('enum', { enum: ClientType_enum_1.ClientType }),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsEnum(ClientType_enum_1.ClientType),
        __metadata("design:type", String)
    ], MatchingEntity.prototype, "rewardReceiverType", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsUUID('4'),
        __metadata("design:type", String)
    ], MatchingEntity.prototype, "rewardReceiverId", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return __1.RewardRecordEntity; }, function (rewardRecord) { return rewardRecord.matching; }),
        __metadata("design:type", __1.RewardRecordEntity)
    ], MatchingEntity.prototype, "rewardRecord", void 0);
    MatchingEntity = __decorate([
        typeorm_1.Entity('matchings')
    ], MatchingEntity);
    return MatchingEntity;
}(base_entity_1.BaseEntity));
exports.MatchingEntity = MatchingEntity;
