import { IController } from '../../controllers/protocols/controller';
import { CreateVehicleController } from '../../controllers/implementations/vehicle/create-vehicle-controller';
import { DbCreateVehicle } from '../../usecases/implementations/db-create-vehicle';
import { VehicleRepository } from '../../repositories/implementations/vehicle-repository';

export function CreateVehicleControllerFactory(): IController {
	const vehicleRepository = new VehicleRepository();
	const dbCreateVehicle = new DbCreateVehicle(vehicleRepository);
	const controller = new CreateVehicleController(dbCreateVehicle);
	return controller;
}
