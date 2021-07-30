import { VehicleModel } from '../models/vehicle-model';

export interface IFindVehicles {
	execute(query: string): Promise<VehicleModel[]>;
}
