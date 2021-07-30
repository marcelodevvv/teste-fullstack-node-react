import { Request, Response } from 'express';
import { IController } from '../../protocols/controller';
import { ICreateVehicle } from '../../../usecases/protocols/create-vehicle';

export class CreateVehicleController implements IController {
	constructor(private readonly createVehicle: ICreateVehicle) {}

	async handle(request: Request, response: Response) {
		try {
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

			const vehicleModel = await this.createVehicle.execute({
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
