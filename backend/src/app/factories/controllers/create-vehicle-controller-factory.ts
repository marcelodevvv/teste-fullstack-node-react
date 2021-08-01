import { IController } from '../../controllers/protocols';
import { CreateVehicleController } from '../../controllers/implementations';
import { DbSaveVehicle } from '../../usecases/implementations';
import { VehicleRepository } from '../../repositories/implementations';

export function CreateVehicleControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbSaveVehicle = new DbSaveVehicle(vehicleRepository);
	const controller = new CreateVehicleController(dbSaveVehicle);
	return controller;
}
