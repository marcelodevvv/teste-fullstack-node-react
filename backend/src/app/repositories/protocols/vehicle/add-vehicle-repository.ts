import { VehicleModel } from '../../../usecases/models/vehicle-model';
import { CreateVehicleParams } from '../../../usecases/protocols/create-vehicle';

export interface IAddVehicleRepository {
	add(data: CreateVehicleParams): Promise<VehicleModel>;
}
