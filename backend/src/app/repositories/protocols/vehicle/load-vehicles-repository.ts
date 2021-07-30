import { VehicleModel } from '../../../usecases/models/vehicle-model';

export interface ILoadVehiclesRepository {
	loadAll(): Promise<VehicleModel[]>;
}
