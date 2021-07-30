import { VehicleModel } from '../models/vehicle-model';

export type CreateVehicleParams = Omit<VehicleModel, 'id'>;

export interface ICreateVehicle {
	execute(data: CreateVehicleParams): Promise<VehicleModel>;
}
