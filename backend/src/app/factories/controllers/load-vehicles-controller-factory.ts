import { LoadVehiclesController } from '../../controllers/implementations/vehicle/load-vehicles.controller';
import { IController } from '../../controllers/protocols/controller';
import { VehicleRepository } from '../../repositories/implementations/vehicle-repository';
import { DbLoadVehicles } from '../../usecases/implementations/db-load-vehicles';

export function LoadVehiclesControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbLoadVehicles = new DbLoadVehicles(vehicleRepository);
	const controller = new LoadVehiclesController(dbLoadVehicles);
	return controller;
}
