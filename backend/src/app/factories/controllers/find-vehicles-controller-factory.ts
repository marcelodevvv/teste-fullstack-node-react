import { FindVehiclesController } from '../../controllers/implementations';
import { IController } from '../../controllers/protocols';
import { VehicleRepository } from '../../repositories/implementations';
import { DbFindVehicles } from '../../usecases/implementations';

export function FindVehiclesControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbFindVehicles = new DbFindVehicles(vehicleRepository);
	const controller = new FindVehiclesController(dbFindVehicles);
	return controller;
}
