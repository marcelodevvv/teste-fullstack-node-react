import { VehicleModel } from '../../../usecases/models/vehicle-model';

export interface IFindVehiclesRepository {
	find(query: string): Promise<VehicleModel[]>;
}
