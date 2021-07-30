import { VehicleModel } from '../../../usecases/models';

export interface ILoadVehiclesRepository {
	loadAll(): Promise<VehicleModel[]>;
}
