import { VehicleModel } from '../models';

export type CreateVehicleParams = Omit<VehicleModel, 'id'>;

export interface ICreateVehicle {
	execute(data: CreateVehicleParams): Promise<VehicleModel>;
}
