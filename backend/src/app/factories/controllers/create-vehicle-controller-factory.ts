import { IController } from '../../controllers/protocols';
import { CreateVehicleController } from '../../controllers/implementations';
import { DbSaveVehicle } from '../../usecases/implementations';
import { VehicleRepository } from '../../repositories/implementations';

export function CreateVehicleControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbCreateVehicle = new DbSaveVehicle(vehicleRepository);
	const controller = new CreateVehicleController(dbCreateVehicle);
	return controller;
}
