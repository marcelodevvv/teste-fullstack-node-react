import { app } from './app';
import { createConnection } from './database';

import fixtures from '../data.json';
import { VehicleRepository } from './app/repositories/implementations/vehicle-repository';

const PORT = process.env.PORT || 3333;

createConnection()
	.then(async () => {
		const vehicleRepository = new VehicleRepository();

		const vehicles = await vehicleRepository.loadAll();

		if (vehicles.length === 0) {
			// load fictional data
			fixtures.slice(0, 20).forEach((fixture) => {
				vehicleRepository.save({
					brand: fixture.marca,
					description: `${fixture.veiculo} - ${fixture.cod_fipe}`,
					vehicle: fixture.veiculo,
					year: Math.floor(Math.random() * (2022 - 1980 + 1) + 1980),
					sold: fixture.vendido,
				});
			});
		}

		app.listen(PORT, () => {
			console.log(`Server listening at http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.error('Database connection failed', error);
	});
