import { Router } from 'express';
import { makeCreateVehicleController } from './app/factories/controllers/create-vehicle-controller-factory';

const router = Router();

router.post('/veiculos', (req, res) =>
	makeCreateVehicleController().handle(req, res)
);

export { router };
