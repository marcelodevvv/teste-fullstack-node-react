import { VehicleModel } from '../models/vehicle-model';
import {
	CreateVehicleParams,
	ICreateVehicle,
} from '../protocols/create-vehicle';

export class DbCreateVehicle implements ICreateVehicle {
	async execute(data: CreateVehicleParams): Promise<VehicleModel> {
		throw new Error('Method not implemented.');
	}
}
