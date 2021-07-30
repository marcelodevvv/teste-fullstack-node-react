import { VehicleModel } from '../models';

export interface ILoadVehicles {
	execute(): Promise<VehicleModel[]>;
}
