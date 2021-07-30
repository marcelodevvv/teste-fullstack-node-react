import { Router } from 'express';
import { CreateVehicleControllerFactory } from './app/factories/controllers/create-vehicle-controller-factory';
import { LoadVehiclesControllerFactory } from './app/factories/controllers/load-vehicles-controller-factory';

const router = Router();

router.get('/veiculos', (req, res) =>
	LoadVehiclesControllerFactory().handle(req, res)
);

router.post('/veiculos', (req, res) =>
	CreateVehicleControllerFactory().handle(req, res)
);

export { router };
