import { Column, Entity} from 'typeorm';
import { BaseEntity } from '../base.entity';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity('addresses')
export class AddressEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsString()
  street: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  number: string;

  @Column()
  @IsOptional()
  @IsString()
  addition?: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  country: string;
}
