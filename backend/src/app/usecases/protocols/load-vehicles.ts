import { VehicleModel } from '../models/vehicle-model';

export interface ILoadVehicles {
	execute(): Promise<VehicleModel[]>;
}
