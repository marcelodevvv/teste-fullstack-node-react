import { VehicleModel } from '../models';
import { IFindVehicles } from '../protocols';
import { IFindVehiclesRepository } from '../../repositories/protocols';

export class DbFindVehicles implements IFindVehicles {
	constructor(
		private readonly findVehiclesRepository: IFindVehiclesRepository
	) {}

	async execute(query: string): Promise<VehicleModel[]> {
		const vehicles = await this.findVehiclesRepository.find(query);
		return vehicles;
	}
}
