import { useCallback } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useVehicle } from '../../hooks/useVehicle';

import { VehicleItem } from '../VehicleItem';
import { NoContent } from '../NoContent';

import { Container } from './styles';

export function VehiclesList() {
	const { vehicles, selectVehicle, editVehicle, selectedVehicle } = useVehicle();
	const isSmallDevice = useMediaQuery('(max-width:600px)');

	const handleVehicleClick = useCallback(
		(vehicleId: string) => {
			if (isSmallDevice) {
				editVehicle(vehicleId);
			} else {
				selectVehicle(vehicleId);
			}
		},
		[isSmallDevice, selectVehicle, editVehicle]
	);

	return (
		<Container>
			<h3>Lista de veículos</h3>

			{vehicles.length ? (
				vehicles.map((vehicle) => (
					<VehicleItem
						key={vehicle.id}
						vehicle={vehicle}
						onVehicleClick={handleVehicleClick}
						isSelected={selectedVehicle === vehicle.id}
					/>
				))
			) : (
				<NoContent>Nenhum veículo encontrado</NoContent>
			)}
		</Container>
	);
}
