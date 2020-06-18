import { BaseEntity } from '../base.entity';
import { InstitutionEntity } from '../institution/institution.entity';
export declare class InstitutionTypeEntity extends BaseEntity {
    name: string;
    description: string;
    institutions: InstitutionEntity[];
}
