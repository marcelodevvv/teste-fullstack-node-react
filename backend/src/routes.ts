import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Vehicle } from './entities/vehicle';

const router = Router();

router.get('/create', async (req, res) => {
	const vehicle = new Vehicle({
		brand: 'brand',
		description: 'description',
		sold: true,
		vehicle: 'vehicle',
		year: 2010,
	});

	await getRepository(Vehicle).save(vehicle);
	res.json({ ok: true });
});

router.get('/list', async (req, res) => {
	const vehicles = await getRepository(Vehicle).find();
	res.json(vehicles);
});

export { router };
