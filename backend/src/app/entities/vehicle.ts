import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
} from 'typeorm';

@Entity()
export class Vehicle {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	vehicle: string;

	@Column()
	brand: string;

	@Column()
	year: number;

	@Column()
	sold: boolean;

	@Column('text')
	description: string;

	@CreateDateColumn()
	created_at: Date;

	constructor(data: Omit<Vehicle, 'id' | 'created_at'>) {
		Object.assign(this, data);
	}
}
