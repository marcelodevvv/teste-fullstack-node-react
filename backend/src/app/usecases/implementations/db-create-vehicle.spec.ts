import { IAddVehicleRepository } from '../../repositories/protocols';
import { VehicleModel } from '../models';
import { CreateVehicleParams } from '../protocols';
import { DbCreateVehicle } from './db-create-vehicle';

const mockCreateVehicleParams = (): CreateVehicleParams => ({
	vehicle: 'Mocked Vehicle',
	brand: 'Mocked Brand',
	description: 'Mocked Descriptions',
	sold: false,
	year: 2010,
});

const mockVehicleModel = (): VehicleModel => ({
	id: 'Mocked Id',
	...mockCreateVehicleParams(),
});

class AddVehicleRepositoryStub implements IAddVehicleRepository {
	async add(_: CreateVehicleParams): Promise<VehicleModel> {
		return mockVehicleModel();
	}
}

type SutTypes = {
	sut: DbCreateVehicle;
	addVehicleRepositoryStub: IAddVehicleRepository;
};

const makeSut = (): SutTypes => {
	const addVehicleRepositoryStub = new AddVehicleRepositoryStub();
	const sut = new DbCreateVehicle(addVehicleRepositoryStub);
	return {
		sut,
		addVehicleRepositoryStub,
	};
};

describe('DbCreateVehicle Usecase', () => {
	it('Should call addVehicleRepository with correct values', async () => {
		const { sut, addVehicleRepositoryStub } = makeSut();
		const addSpy = jest.spyOn(addVehicleRepositoryStub, 'add');
		await sut.execute(mockCreateVehicleParams());
		expect(addSpy).toHaveBeenCalledWith(mockCreateVehicleParams());
	});

	it('Should throw if addVehicleRepository throws', async () => {
		const { sut, addVehicleRepositoryStub } = makeSut();
		jest
			.spyOn(addVehicleRepositoryStub, 'add')
			.mockReturnValueOnce(Promise.reject(new Error('mocked_error')));
		const promise = sut.execute(mockCreateVehicleParams());
		await expect(promise).rejects.toThrow(new Error('mocked_error'));
	});

	it('Should return a VehicleModel on success', async () => {
		const { sut } = makeSut();
		const vehicleModel = await sut.execute(mockCreateVehicleParams());
		expect(vehicleModel).toEqual(mockVehicleModel());
	});
});
