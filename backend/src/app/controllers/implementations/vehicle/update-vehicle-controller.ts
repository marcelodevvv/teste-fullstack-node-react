import { IController } from '../../protocols/controller';
import { IFindVehicles, ISaveVehicle } from '../../../usecases/protocols';
import { Request, Response } from 'express';

export class UpdateVehicleController implements IController {
	constructor(
		private readonly saveVehicle: ISaveVehicle,
		private readonly findVehicles: IFindVehicles
	) {}

	async handle(request: Request, response: Response) {
		try {
			const { id } = request.params;

			const vehicles = await this.findVehicles.execute(id);
			if (!vehicles.length) {
				return response.status(400).json({
					error: 'Invalid id',
				});
			}

			const requiredParams = ['vehicle', 'brand', 'year', 'sold', 'description'];
			const missingParams = [];

			requiredParams.forEach((param) => {
				if (!Object.keys(request.body).includes(param)) {
					missingParams.push(param);
				}
			});

			if (missingParams.length > 0) {
				return response.status(400).json({
					error: 'Missing params',
					value: missingParams,
				});
			}

			const { vehicle, brand, year, sold, description } = request.body;

			const vehicleModel = await this.saveVehicle.execute({
				id,
				vehicle,
				brand,
				year,
				sold,
				description,
			});

			return response.status(200).json({ vehicle: vehicleModel });
		} catch (error) {
			return response.status(500).send(error.stack);
		}
	}
}
