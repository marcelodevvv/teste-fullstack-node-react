import { Router } from 'express';
import {
	CreateVehicleControllerFactory,
	UpdateVehicleControllerFactory,
	FindVehiclesControllerFactory,
	LoadVehiclesControllerFactory,
} from './app/factories/controllers';

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

router.put('/veiculos/:id', (req, res) =>
	UpdateVehicleControllerFactory().handle(req, res)
);

export { router };
