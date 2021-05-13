import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNumber, Max, Min } from 'class-validator';
import { eVision } from 'src/constants/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Auditable } from './auditable';

@Entity('character')
export class Character extends Auditable {
  @PrimaryGeneratedColumn()
  @IsDefined()
  @IsNumber()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  @ApiPropertyOptional({ description: 'Character name' })
  name: string;

  @Column({ type: 'enum', enum: eVision, default: eVision.Dendro })
  @IsDefined()
  vision: eVision;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  weapon: string;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  nation: string;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  affiliation: string;

  @Column({ type: 'int', width: 200 })
  @Min(0)
  @Max(6)
  @IsDefined()
  rarity: number;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  constellation: string;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  birthday: string;

  @Column({ type: 'varchar', length: 100 })
  @IsDefined()
  description: string;
}
