import request from 'supertest';
import { app } from '../../../../app';
import {
	createConnection,
	closeConnection,
	truncateAllTables,
} from '../../../../database';

describe('Create Vehicle Controller', () => {
	beforeAll(async () => {
		await createConnection();
	});

	afterAll(async () => {
		await closeConnection();
	});

	beforeEach(async () => {
		await truncateAllTables();
	});

	it('Should create a new vehicle', async () => {
		const response = await request(app).post('/veiculos').send({
			vehicle: 'Vehicle 1',
			brand: 'Brand',
			year: 2012,
			sold: true,
			description: 'Description',
		});

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('vehicle');
		expect(response.body.vehicle.id).toBeTruthy();
		expect(response.body.vehicle.vehicle).toBe('Vehicle 1');
	});
});
