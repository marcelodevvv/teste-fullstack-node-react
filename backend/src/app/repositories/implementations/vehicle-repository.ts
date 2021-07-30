import { VehicleModel } from '../../usecases/models/vehicle-model';
import { CreateVehicleParams } from '../../usecases/protocols/create-vehicle';
import { IAddVehicleRepository } from '../protocols/vehicle/add-vehicle-repository';
import { getRepository, Like } from 'typeorm';
import { Vehicle } from '../../entities/vehicle';
import { ILoadVehiclesRepository } from '../protocols/vehicle/load-vehicles-repository';
import { IFindVehiclesRepository } from '../protocols/vehicle/find-vehicles-repository';

export class VehicleRepository
	implements
		IAddVehicleRepository,
		ILoadVehiclesRepository,
		IFindVehiclesRepository
{
	async add(data: CreateVehicleParams): Promise<VehicleModel> {
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
			vehicle: like,
			brand: like,
			description: like,
			year,
		});

		return vehicles;
	}
}
