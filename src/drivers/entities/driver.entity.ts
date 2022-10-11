import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from '@nestjs/class-transformer';
import { hashSync } from 'bcrypt';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;
  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  photoPath: string;

  @Column()
  minibus_id: string;

  @Column()
  license: string;

  @Column()
  route_id: string;

  @CreateDateColumn()
  @Exclude()
  create_at: Date;

  @BeforeInsert()
  cryptPassword() {
    this.password = hashSync(this.password, 10);
  }
}
