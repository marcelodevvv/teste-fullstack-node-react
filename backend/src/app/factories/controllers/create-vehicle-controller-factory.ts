import { IController } from '../../controllers/protocols/controller';
import { CreateVehicleController } from '../../controllers/create-vehicle/create-vehicle-controller';
import { DbCreateVehicle } from '../../usecases/implementations/db-create-vehicle';

export function CreateVehicleControllerFactory(): IController {
	const dbCreateVehicle = new DbCreateVehicle();
	const controller = new CreateVehicleController(dbCreateVehicle);
	return controller;
}
