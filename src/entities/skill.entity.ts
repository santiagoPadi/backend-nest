import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Auditable } from './auditable';

@Entity('skill')
export class Skill extends Auditable {
  @PrimaryGeneratedColumn()
  @IsDefined()
  @IsNumber()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  @IsDefined()
  @ApiPropertyOptional({ description: 'Constellation name' })
  name: string;

  @Column({ type: 'varchar', length: 200 })
  @IsDefined()
  unlock: string;

  @Column({ type: 'varchar', length: 500 })
  @IsDefined()
  description: string;

  @Column({ type: 'int', width: 200 })
  @Min(0)
  @Max(7)
  @IsOptional()
  level?: string;
}
