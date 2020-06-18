import { Entity, Generated, OneToOne, PrimaryColumn } from 'typeorm';
import { InstitutionEntity } from '../..';

@Entity('institutionAdmins')
export class InstitutionAdminEntity {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  /*
   * Relations
   * */
  @OneToOne(() => InstitutionEntity, (institution) => institution.institutionAdmin)
  institution: InstitutionEntity;
}
