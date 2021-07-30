import { IFindVehiclesRepository } from '../../repositories/protocols';
import { VehicleModel } from '../models';
import { DbFindVehicles } from './db-find-vehicles';

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

class FindVehiclesRepositoryStub implements IFindVehiclesRepository {
	async find(query: string): Promise<VehicleModel[]> {
		return mockVehicleModelList();
	}
}

type SutTypes = {
	sut: DbFindVehicles;
	findVehiclesRepositoryStub: IFindVehiclesRepository;
};

const makeSut = (): SutTypes => {
	const findVehiclesRepositoryStub = new FindVehiclesRepositoryStub();
	const sut = new DbFindVehicles(findVehiclesRepositoryStub);
	return {
		sut,
		findVehiclesRepositoryStub,
	};
};

describe('DbFindVehicles Usecase', () => {
	it('Should call findVehiclesRepository with correct query', async () => {
		const { sut, findVehiclesRepositoryStub } = makeSut();
		const findSpy = jest.spyOn(findVehiclesRepositoryStub, 'find');
		await sut.execute('any_query');
		expect(findSpy).toHaveBeenCalledWith('any_query');
	});

	it('Should throw if findVehiclesRepository throws', async () => {
		const { sut, findVehiclesRepositoryStub } = makeSut();
		jest
			.spyOn(findVehiclesRepositoryStub, 'find')
			.mockReturnValueOnce(Promise.reject(new Error('mocked_error')));
		const promise = sut.execute('any_query');
		await expect(promise).rejects.toThrow(new Error('mocked_error'));
	});

	it('Should return a list of VehicleModel on success', async () => {
		const { sut } = makeSut();
		const vehicleModels = await sut.execute('any_query');
		expect(vehicleModels).toEqual(mockVehicleModelList());
	});
});
