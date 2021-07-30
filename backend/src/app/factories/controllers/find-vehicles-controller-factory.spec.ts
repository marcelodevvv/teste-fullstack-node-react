import { FindVehiclesControllerFactory } from './find-vehicles-controller-factory';

describe('FindVehiclesController Factory', () => {
	it('Should return an valid instance without errors', async () => {
		const instance = FindVehiclesControllerFactory();
		expect(instance).toBeTruthy();
	});
});
