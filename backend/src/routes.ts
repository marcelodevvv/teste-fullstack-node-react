import { Router } from 'express';
import { CreateVehicleControllerFactory } from './app/factories/controllers/create-vehicle-controller-factory';

const router = Router();

router.post('/veiculos', (req, res) =>
	CreateVehicleControllerFactory().handle(req, res)
);

export { router };
