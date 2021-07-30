import { CreateVehicleControllerFactory } from './create-vehicle-controller-factory';

describe('CreateVehicleController Factory', () => {
	it('Should return an valid instance without errors', async () => {
		const instance = CreateVehicleControllerFactory();
		expect(instance).toBeTruthy();
	});
});
