import { VehicleModel } from '../../../usecases/models/vehicle-model';
import { CreateVehicleParams } from '../../../usecases/protocols/create-vehicle';

export interface IAddVehicleRepository {
	addVehicle(data: CreateVehicleParams): Promise<VehicleModel>;
}
