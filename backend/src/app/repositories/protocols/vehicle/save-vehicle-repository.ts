import { VehicleModel } from '../../../usecases/models';
import { SaveVehicleParams } from '../../../usecases/protocols';

export interface ISaveVehicleRepository {
	save(data: SaveVehicleParams): Promise<VehicleModel>;
}
