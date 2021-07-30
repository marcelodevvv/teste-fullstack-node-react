import { VehicleModel } from '../../usecases/models/vehicle-model';
import { CreateVehicleParams } from '../../usecases/protocols/create-vehicle';
import { IAddVehicleRepository } from '../protocols/vehicle/add-vehicle-repository';
import { getRepository } from 'typeorm';
import { Vehicle } from '../../entities/vehicle';

export class VehicleRepository implements IAddVehicleRepository {
	async add(data: CreateVehicleParams): Promise<VehicleModel> {
		const vehicle = await getRepository(Vehicle).save(data);
		return vehicle;
	}
}
