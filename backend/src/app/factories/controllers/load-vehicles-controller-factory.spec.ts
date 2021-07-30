import { LoadVehiclesControllerFactory } from './load-vehicles-controller-factory';

describe('LoadVehiclesController Factory', () => {
	it('Should return an valid instance without errors', async () => {
		const instance = LoadVehiclesControllerFactory();
		expect(instance).toBeTruthy();
	});
});
