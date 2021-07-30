import { Request, Response } from 'express';
import { IController } from '../../protocols/controller';
import { IFindVehicles } from '../../../usecases/protocols/find-vehicles';

export class FindVehiclesController implements IController {
	constructor(private readonly findVehicles: IFindVehicles) {}

	async handle(request: Request, response: Response) {
		try {
			const { query } = request.query;

			if (!query) {
				return response.status(400).json({
					error: 'Missing query params',
					value: ['query'],
				});
			}

			const vehicles = await this.findVehicles.execute(String(query));
			return response.status(200).json({ vehicles });
		} catch (error) {
			return response.status(500).send(error.stack);
		}
	}
}
