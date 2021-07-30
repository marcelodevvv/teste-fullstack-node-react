import { FindVehiclesController } from '../../controllers/implementations/vehicle/find-vehicles-controller';
import { IController } from '../../controllers/protocols/controller';
import { VehicleRepository } from '../../repositories/implementations/vehicle-repository';
import { DbFindVehicles } from '../../usecases/implementations/db-find-vehicles';

export function FindVehiclesControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbFindVehicles = new DbFindVehicles(vehicleRepository);
	const controller = new FindVehiclesController(dbFindVehicles);
	return controller;
}
