import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { IsAlpha, IsAlphanumeric, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity('addresses')
export class AddressEntity extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @IsAlpha()
  street: string;

  @Column()
  @IsNotEmpty()
  @IsAlphanumeric()
  number: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  addition?: string;

  @Column()
  @IsNotEmpty()
  @IsAlphanumeric()
  postalCode: string;

  @Column()
  @IsNotEmpty()
  @IsAlpha()
  city: string;

  @Column()
  @IsNotEmpty()
  @IsAlpha()
  country: string;
}
