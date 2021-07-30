import { VehicleModel } from '../models/vehicle-model';

export interface ILoadVehicle {
	execute(): Promise<VehicleModel[]>;
}
