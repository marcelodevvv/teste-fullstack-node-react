import { IController } from '../../protocols/controller';
import { ILoadVehicles } from '../../../usecases/protocols';
import { Request, Response } from 'express';

export class LoadVehiclesController implements IController {
	constructor(private readonly loadVehicles: ILoadVehicles) {}

	async handle(request: Request, response: Response) {
		try {
			const vehicles = await this.loadVehicles.execute();
			return response.status(200).json({ vehicles });
		} catch (error) {
			return response.status(500).send(error.stack);
		}
	}
}
