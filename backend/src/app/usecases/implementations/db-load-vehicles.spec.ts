import { ILoadVehiclesRepository } from '../../repositories/protocols';
import { VehicleModel } from '../models';
import { DbLoadVehicles } from './db-load-vehicles';

const mockVehicleModel = (number?: number): VehicleModel => ({
	id: `Mocked Id ${number}`,
	vehicle: 'Mocked Vehicle',
	brand: 'Mocked Brand',
	description: 'Mocked Descriptions',
	sold: false,
	year: 2010,
});

const mockVehicleModelList = () => [
	mockVehicleModel(1),
	mockVehicleModel(2),
	mockVehicleModel(3),
];

class LoadVehiclesRepositoryStub implements ILoadVehiclesRepository {
	async loadAll(): Promise<VehicleModel[]> {
		return mockVehicleModelList();
	}
}

type SutTypes = {
	sut: DbLoadVehicles;
	loadVehiclesRepositoryStub: ILoadVehiclesRepository;
};

const makeSut = (): SutTypes => {
	const loadVehiclesRepositoryStub = new LoadVehiclesRepositoryStub();
	const sut = new DbLoadVehicles(loadVehiclesRepositoryStub);
	return {
		sut,
		loadVehiclesRepositoryStub,
	};
};

describe('DbLoadVehicles Usecase', () => {
	it('Should call loadVehiclesRepository', async () => {
		const { sut, loadVehiclesRepositoryStub } = makeSut();
		const loadAllSpy = jest.spyOn(loadVehiclesRepositoryStub, 'loadAll');
		await sut.execute();
		expect(loadAllSpy).toHaveBeenCalledTimes(1);
	});

	it('Should throw if loadVehiclesRepository throws', async () => {
		const { sut, loadVehiclesRepositoryStub } = makeSut();
		jest
			.spyOn(loadVehiclesRepositoryStub, 'loadAll')
			.mockReturnValueOnce(Promise.reject(new Error('mocked_error')));
		const promise = sut.execute();
		await expect(promise).rejects.toThrow(new Error('mocked_error'));
	});

	it('Should return a list of VehicleModel on success', async () => {
		const { sut } = makeSut();
		const vehicleModels = await sut.execute();
		expect(vehicleModels).toEqual(mockVehicleModelList());
	});
});
