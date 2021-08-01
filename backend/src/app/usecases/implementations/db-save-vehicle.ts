import { VehicleModel } from '../models';
import { SaveVehicleParams, ISaveVehicle } from '../protocols';
import { ISaveVehicleRepository } from '../../repositories/protocols';

export class DbSaveVehicle implements ISaveVehicle {
	constructor(private readonly saveVehicleRepository: ISaveVehicleRepository) {}

	async execute(data: SaveVehicleParams): Promise<VehicleModel> {
		const vehicle = await this.saveVehicleRepository.save(data);
		return vehicle;
	}
}
