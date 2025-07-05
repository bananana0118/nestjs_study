import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  parkingSpots: number;

  @Column()
  area: number;

  @Column()
  hasBalcony: boolean;

  @Column()
  hasGardenYard: boolean;

  @Column()
  hasSwimmingPool: boolean;

  //target의 주소를 넣기
  @OneToOne(() => Property, (property) => property.propertyFeature, {
    cascade: true,
  })
  @JoinColumn()
  property: Property;
}
