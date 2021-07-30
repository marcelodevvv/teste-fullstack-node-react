import { Router } from 'express';
import { CreateVehicleControllerFactory } from './app/factories/controllers/create-vehicle-controller-factory';
import { FindVehiclesControllerFactory } from './app/factories/controllers/find-vehicles-controller-factory';
import { LoadVehiclesControllerFactory } from './app/factories/controllers/load-vehicles-controller-factory';

const router = Router();

router.get('/veiculos', (req, res) =>
	LoadVehiclesControllerFactory().handle(req, res)
);

router.get('/veiculos/find', (req, res) =>
	FindVehiclesControllerFactory().handle(req, res)
);

router.post('/veiculos', (req, res) =>
	CreateVehicleControllerFactory().handle(req, res)
);

export { router };
