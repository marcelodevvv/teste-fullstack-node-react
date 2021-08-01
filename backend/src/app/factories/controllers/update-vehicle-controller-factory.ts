import { IController } from '../../controllers/protocols';
import { UpdateVehicleController } from '../../controllers/implementations';
import { DbSaveVehicle, DbFindVehicles } from '../../usecases/implementations';
import { VehicleRepository } from '../../repositories/implementations';

export function UpdateVehicleControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbSaveVehicle = new DbSaveVehicle(vehicleRepository);
	const dbFindVehicle = new DbFindVehicles(vehicleRepository);
	const controller = new UpdateVehicleController(dbSaveVehicle, dbFindVehicle);
	return controller;
}
