import { VehicleModel } from '../../usecases/models/vehicle-model';
import { CreateVehicleParams } from '../../usecases/protocols/create-vehicle';
import { IAddVehicleRepository } from '../protocols/vehicle/add-vehicle-repository';
import { getRepository } from 'typeorm';
import { Vehicle } from '../../entities/vehicle';
import { ILoadVehiclesRepository } from '../protocols/vehicle/load-vehicles-repository';

export class VehicleRepository
	implements IAddVehicleRepository, ILoadVehiclesRepository
{
	async add(data: CreateVehicleParams): Promise<VehicleModel> {
		const vehicle = await getRepository(Vehicle).save(data);
		return vehicle;
	}

	async loadAll(): Promise<VehicleModel[]> {
		const vehicles = await getRepository(Vehicle).find();
		return vehicles;
	}
}
