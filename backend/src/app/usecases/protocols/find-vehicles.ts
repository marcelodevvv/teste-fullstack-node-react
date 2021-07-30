import { VehicleModel } from '../models';

export interface IFindVehicles {
	execute(query: string): Promise<VehicleModel[]>;
}
