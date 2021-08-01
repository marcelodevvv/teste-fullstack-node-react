import { UpdateVehicleControllerFactory } from './update-vehicle-controller-factory';

describe('UpdateVehicleController Factory', () => {
	it('Should return an valid instance without errors', async () => {
		const instance = UpdateVehicleControllerFactory();
		expect(instance).toBeTruthy();
	});
});
