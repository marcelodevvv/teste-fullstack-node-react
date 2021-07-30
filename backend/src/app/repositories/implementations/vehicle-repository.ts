import { VehicleModel } from '../../usecases/models/vehicle-model';
import { CreateVehicleParams } from '../../usecases/protocols/create-vehicle';
import { IAddVehicleRepository } from '../protocols/vehicle/add-vehicle-repository';

export class VehicleRepository implements IAddVehicleRepository {
	async addVehicle(data: CreateVehicleParams): Promise<VehicleModel> {
		throw new Error('Method not implemented.');
	}
}
