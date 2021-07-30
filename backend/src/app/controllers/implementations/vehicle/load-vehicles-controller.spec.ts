import request from 'supertest';
import { app } from '../../../../app';
import {
	createConnection,
	closeConnection,
	truncateAllTables,
} from '../../../../database';

describe('Load Vehicles Controller', () => {
	beforeAll(async () => {
		await createConnection();
	});

	afterAll(async () => {
		await closeConnection();
	});

	beforeEach(async () => {
		await truncateAllTables();
	});

	it('Should load all vehicles', async () => {
		let response;

		response = await request(app).get('/veiculos');

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('vehicles');
		expect(response.body.vehicles.length).toBe(0);

		await request(app).post('/veiculos').send({
			vehicle: 'Vehicle 1',
			brand: 'Brand',
			year: 2012,
			sold: true,
			description: 'Description',
		});

		await request(app).post('/veiculos').send({
			vehicle: 'Vehicle 2',
			brand: 'Brand',
			year: 2012,
			sold: true,
			description: 'Description',
		});

		response = await request(app).get('/veiculos');

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('vehicles');
		expect(response.body.vehicles[0].id).toBeTruthy();
		expect(response.body.vehicles[0].vehicle).toBe('Vehicle 1');
		expect(response.body.vehicles[1].id).toBeTruthy();
	});
});
