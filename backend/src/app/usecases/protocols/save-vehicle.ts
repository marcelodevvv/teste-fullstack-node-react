import { VehicleModel } from '../models';
import { PartialBy } from '../../utils/utility-types';

export type SaveVehicleParams = PartialBy<VehicleModel, 'id'>;

export interface ISaveVehicle {
	execute(data: SaveVehicleParams): Promise<VehicleModel>;
}
