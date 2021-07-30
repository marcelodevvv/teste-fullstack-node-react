import { VehicleModel } from '../../../usecases/models';

export interface IFindVehiclesRepository {
	find(query: string): Promise<VehicleModel[]>;
}
