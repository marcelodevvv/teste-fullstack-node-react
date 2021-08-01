import { ISaveVehicleRepository } from '../../repositories/protocols';
import { VehicleModel } from '../models';
import { SaveVehicleParams } from '../protocols';
import { DbSaveVehicle } from './db-save-vehicle';

const mockSaveVehicleParams = (id?: string) => ({
	id,
	vehicle: 'Mocked Vehicle',
	brand: 'Mocked Brand',
	description: 'Mocked Descriptions',
	sold: false,
	year: 2010,
});

const mockVehicleModel = (): VehicleModel => mockSaveVehicleParams();

class SaveVehicleRepositoryStub implements ISaveVehicleRepository {
	async save(_: SaveVehicleParams): Promise<VehicleModel> {
		return mockVehicleModel();
	}
}

type SutTypes = {
	sut: DbSaveVehicle;
	saveVehicleRepositoryStub: ISaveVehicleRepository;
};

const makeSut = (): SutTypes => {
	const saveVehicleRepositoryStub = new SaveVehicleRepositoryStub();
	const sut = new DbSaveVehicle(saveVehicleRepositoryStub);
	return {
		sut,
		saveVehicleRepositoryStub,
	};
};

describe('DbSaveVehicle Usecase', () => {
	it('Should call saveVehicleRepository with correct values', async () => {
		const { sut, saveVehicleRepositoryStub } = makeSut();
		const saveSpy = jest.spyOn(saveVehicleRepositoryStub, 'save');
		await sut.execute(mockSaveVehicleParams());
		expect(saveSpy).toHaveBeenCalledWith(mockSaveVehicleParams());
	});

	it('Should throw if saveVehicleRepository throws', async () => {
		const { sut, saveVehicleRepositoryStub } = makeSut();
		jest
			.spyOn(saveVehicleRepositoryStub, 'save')
			.mockReturnValueOnce(Promise.reject(new Error('mocked_error')));
		const promise = sut.execute(mockSaveVehicleParams());
		await expect(promise).rejects.toThrow(new Error('mocked_error'));
	});

	it('Should return a VehicleModel on success', async () => {
		const { sut } = makeSut();
		const vehicleModel = await sut.execute(mockSaveVehicleParams());
		expect(vehicleModel).toEqual(mockVehicleModel());
	});
});
