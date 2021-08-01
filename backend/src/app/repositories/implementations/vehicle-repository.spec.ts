import { VehicleRepository } from './vehicle-repository';
import {
	createConnection,
	closeConnection,
	truncateAllTables,
} from '../../../database/index';

describe('Vehicle Repository', () => {
	let sut: VehicleRepository;

	beforeAll(async () => {
		await createConnection();
	});

	afterAll(async () => {
		await closeConnection();
	});

	beforeEach(async () => {
		await truncateAllTables();
		sut = new VehicleRepository();
	});

	it('Should add a new vehicle', async () => {
		const vehicle = await sut.save({
			vehicle: 'any_vehicle',
			brand: 'any_brand',
			description: 'any_description',
			sold: true,
			year: 2010,
		});

		expect(vehicle).toHaveProperty('id');
		expect(vehicle.id).toBeTruthy();
	});

	it('Should edit a existing vehicle', async () => {
		const vehicle = await sut.save({
			vehicle: 'any_vehicle',
			brand: 'any_brand',
			description: 'any_description',
			sold: true,
			year: 2010,
		});

		expect(vehicle).toHaveProperty('id');
		expect(vehicle.id).toBeTruthy();
		expect(vehicle.description).toBe('any_description');

		const oldId = vehicle.id;
		vehicle.description = 'another_description';
		const editedVehicle = await sut.save(vehicle);

		expect(vehicle.id).toBe(oldId);
		expect(vehicle.description).toBe('another_description');
	});

	it('Should load all vehicles', async () => {
		let vehicles;

		vehicles = await sut.loadAll();
		expect(vehicles).toEqual([]);

		const vehicle1 = await sut.save({
			vehicle: 'any_vehicle1',
			brand: 'any_brand1',
			description: 'any_description1',
			sold: true,
			year: 2010,
		});

		const vehicle2 = await sut.save({
			vehicle: 'any_vehicle2',
			brand: 'any_brand2',
			description: 'any_description2',
			sold: true,
			year: 2010,
		});

		vehicles = await sut.loadAll();

		expect(vehicles.length).toEqual(2);
		expect(vehicles[0].id).toBe(vehicle1.id);
		expect(vehicles[1].id).toBe(vehicle2.id);
	});

	it('Should find specific vehicles', async () => {
		let vehicles;

		vehicles = await sut.find('description');
		expect(vehicles).toEqual([]);

		await sut.save({
			vehicle: 'any_vehicle1',
			brand: 'any_brand1',
			description: 'any_description1',
			sold: true,
			year: 2011,
		});

		await sut.save({
			vehicle: 'any_vehicle2',
			brand: 'any_brand2',
			description: 'any_description2',
			sold: true,
			year: 2010,
		});

		await sut.save({
			vehicle: 'any_vehicle3',
			brand: 'any_brand3',
			description: 'any_description3',
			sold: true,
			year: 2011,
		});

		vehicles = await sut.find('any_description');
		expect(vehicles.length).toEqual(3);

		vehicles = await sut.find('2011');
		expect(vehicles.length).toEqual(2);

		vehicles = await sut.find('any_vehicle1');
		expect(vehicles.length).toEqual(1);
	});

	it('Should find a specific vehicle by its id', async () => {
		const createdVehicle = await sut.save({
			vehicle: 'any_vehicle1',
			brand: 'any_brand1',
			description: 'any_description1',
			sold: true,
			year: 2011,
		});

		const searchedVehicles = await sut.find(createdVehicle.id);
		expect(searchedVehicles.length).toEqual(1);
		expect(searchedVehicles[0]).toEqual(createdVehicle);
	});
});
