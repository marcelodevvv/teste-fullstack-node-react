import { VehicleModel } from '../models';
import { CreateVehicleParams, ICreateVehicle } from '../protocols';
import { IAddVehicleRepository } from '../../repositories/protocols';

export class DbCreateVehicle implements ICreateVehicle {
	constructor(private readonly addVehicleRepository: IAddVehicleRepository) {}

	async execute(data: CreateVehicleParams): Promise<VehicleModel> {
		const vehicle = await this.addVehicleRepository.add(data);
		return vehicle;
	}
}
