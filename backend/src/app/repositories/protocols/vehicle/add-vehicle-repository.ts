import { VehicleModel } from '../../../usecases/models';
import { CreateVehicleParams } from '../../../usecases/protocols';

export interface IAddVehicleRepository {
	add(data: CreateVehicleParams): Promise<VehicleModel>;
}
