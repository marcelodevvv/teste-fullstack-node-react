import {
	ILoadVehiclesRepository,
	IFindVehiclesRepository,
	ISaveVehicleRepository,
} from '../protocols';

import { Vehicle } from '../../entities';
import { VehicleModel } from '../../usecases/models';
import { SaveVehicleParams } from '../../usecases/protocols';
import { getRepository, Like } from 'typeorm';

export class VehicleRepository
	implements
		ISaveVehicleRepository,
		ILoadVehiclesRepository,
		IFindVehiclesRepository
{
	async save(data: SaveVehicleParams): Promise<VehicleModel> {
		const vehicle = await getRepository(Vehicle).save(data);
		return vehicle;
	}

	async loadAll(): Promise<VehicleModel[]> {
		const vehicles = await getRepository(Vehicle).find();
		return vehicles;
	}

	async find(query: string): Promise<VehicleModel[]> {
		const like = Like(`%${query}%`);

		let year = undefined;
		if (!isNaN(Number(query))) {
			year = query;
		}

		const vehicles = await getRepository(Vehicle).find({
			where: [{ vehicle: like }, { brand: like }, { description: like }, { year }],
		});

		return vehicles;
	}
}
