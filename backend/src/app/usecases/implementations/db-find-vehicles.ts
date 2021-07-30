import { IFindVehiclesRepository } from '../../repositories/protocols/vehicle/find-vehicles-repository';
import { VehicleModel } from '../models/vehicle-model';
import { IFindVehicles } from '../protocols/find-vehicles';

export class DbFindVehicles implements IFindVehicles {
	constructor(
		private readonly findVehiclesRepository: IFindVehiclesRepository
	) {}

	async execute(query: string): Promise<VehicleModel[]> {
		const vehicles = await this.findVehiclesRepository.find(query);
		return vehicles;
	}
}
