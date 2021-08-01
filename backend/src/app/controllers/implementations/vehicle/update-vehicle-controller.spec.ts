import request from 'supertest';
import { app } from '../../../../app';
import {
	createConnection,
	closeConnection,
	truncateAllTables,
} from '../../../../database';

describe('Update Vehicle Controller', () => {
	beforeAll(async () => {
		await createConnection();
	});

	afterAll(async () => {
		await closeConnection();
	});

	beforeEach(async () => {
		await truncateAllTables();
	});

	it('Should update a existing vehicle', async () => {
		const createResponse = await request(app).post('/veiculos').send({
			vehicle: 'Vehicle 1',
			brand: 'Brand',
			year: 2012,
			sold: true,
			description: 'Description',
		});

		const createdId = createResponse.body.vehicle.id;

		const updateData = {
			vehicle: 'Vehicle updated',
			brand: 'Brand updated',
			year: 2013,
			sold: false,
			description: 'Description updated',
		};

		const updateResponse = await request(app)
			.put(`/veiculos/${createdId}`)
			.send(updateData);

		expect(updateResponse.status).toBe(200);
		expect(updateResponse.body).toHaveProperty('vehicle');
		expect(updateResponse.body.vehicle.id).toBe(createdId);
		expect(updateResponse.body.vehicle.vehicle).toBe(updateData.vehicle);
		expect(updateResponse.body.vehicle.brand).toBe(updateData.brand);
		expect(updateResponse.body.vehicle.year).toBe(updateData.year);
		expect(updateResponse.body.vehicle.sold).toBe(updateData.sold);
		expect(updateResponse.body.vehicle.description).toBe(updateData.description);
	});

	it("Should not update a vehicle if it doesn't exists", async () => {
		const updateResponse = await request(app).put(`/veiculos/invalid_id`).send({
			vehicle: 'Vehicle updated',
			brand: 'Brand updated',
			year: 2013,
			sold: false,
			description: 'Description updated',
		});

		expect(updateResponse.status).toBe(400);
	});
});
