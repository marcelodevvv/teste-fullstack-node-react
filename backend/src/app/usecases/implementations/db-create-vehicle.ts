import { VehicleModel } from '../models/vehicle-model';
import {
	CreateVehicleParams,
	ICreateVehicle,
} from '../protocols/create-vehicle';
import { IAddVehicleRepository } from '../../repositories/protocols/vehicle/add-vehicle-repository';

export class DbCreateVehicle implements ICreateVehicle {
	constructor(private readonly addVehicleRepository: IAddVehicleRepository) {}

	async execute(data: CreateVehicleParams): Promise<VehicleModel> {
		const vehicle = await this.addVehicleRepository.addVehicle(data);
		return vehicle;
	}
}
