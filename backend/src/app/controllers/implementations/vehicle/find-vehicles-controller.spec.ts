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

	it('Should load specific vehicles', async () => {
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
			year: 2010,
			sold: true,
			description: 'Description',
		});

		let response;

		response = await request(app).get('/veiculos/find').query({
			query: '2010',
		});
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('vehicles');
		expect(response.body.vehicles.length).toBe(1);

		response = await request(app).get('/veiculos/find').query({
			query: 'Vehicle 2',
		});
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('vehicles');
		expect(response.body.vehicles.length).toBe(1);

		response = await request(app).get('/veiculos/find').query({
			query: 'Vehicle',
		});
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('vehicles');
		expect(response.body.vehicles.length).toBe(2);
	});
});
