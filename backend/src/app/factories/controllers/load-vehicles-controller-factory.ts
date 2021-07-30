import { LoadVehiclesController } from '../../controllers/implementations';
import { IController } from '../../controllers/protocols';
import { VehicleRepository } from '../../repositories/implementations';
import { DbLoadVehicles } from '../../usecases/implementations';

export function LoadVehiclesControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbLoadVehicles = new DbLoadVehicles(vehicleRepository);
	const controller = new LoadVehiclesController(dbLoadVehicles);
	return controller;
}
