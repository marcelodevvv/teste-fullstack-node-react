import { VehicleModel } from '../models';
import { ILoadVehicles } from '../protocols';
import { ILoadVehiclesRepository } from '../../repositories/protocols';

export class DbLoadVehicles implements ILoadVehicles {
	constructor(
		private readonly loadVehiclesRepository: ILoadVehiclesRepository
	) {}

	async execute(): Promise<VehicleModel[]> {
		const vehicles = await this.loadVehiclesRepository.loadAll();
		return vehicles;
	}
}
