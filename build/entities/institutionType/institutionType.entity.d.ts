import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../..';
export declare class InstitutionTypeEntity extends BaseEntity {
    name: string;
    description: string;
    institutions: InstitutionEntity[];
}
