import { useVehicle } from '../../hooks/useVehicle';

import { VehicleItem } from '../VehicleItem';
import { NoContent } from '../NoContent';

import { Container } from './styles';

export function VehiclesList() {
	const { vehicles, selectVehicle, selectedVehicle } = useVehicle();

	return (
		<Container>
			<h3>Lista de veículos</h3>

			{vehicles.length ? (
				vehicles.map((vehicle) => (
					<VehicleItem
						key={vehicle.id}
						vehicle={vehicle}
						onVehicleClick={selectVehicle}
						isSelected={selectedVehicle === vehicle.id}
					/>
				))
			) : (
				<NoContent>Ainda não há veículos adicionados</NoContent>
			)}
		</Container>
	);
}
