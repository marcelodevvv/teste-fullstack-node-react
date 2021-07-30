import { Controller } from '../../controllers/protocols/controller';
import { CreateVehicleController } from '../../controllers/create-vehicle/create-vehicle-controller';
import { DbCreateVehicle } from '../../usecases/implementations/db-create-vehicle';

export function makeCreateVehicleController(): Controller {
	const dbCreateVehicle = new DbCreateVehicle();
	const controller = new CreateVehicleController(dbCreateVehicle);
	return controller;
}
