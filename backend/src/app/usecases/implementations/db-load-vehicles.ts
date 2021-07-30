import { VehicleModel } from '../models/vehicle-model';
import { ILoadVehiclesRepository } from '../../repositories/protocols/vehicle/load-vehicles-repository';
import { ILoadVehicle } from '../protocols/load-vehicles';

export class DbLoadVehicles implements ILoadVehicle {
	constructor(
		private readonly loadVehiclesRepository: ILoadVehiclesRepository
	) {}

	async execute(): Promise<VehicleModel[]> {
		const vehicles = await this.loadVehiclesRepository.loadAll();
		return vehicles;
	}
}
