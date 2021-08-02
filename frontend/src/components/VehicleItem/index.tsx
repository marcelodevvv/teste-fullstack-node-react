import Image from 'next/image';

import tagImg from '/public/tag.svg';
import tagSoldImg from '/public/tag_sold.svg';

import { Container } from './styles';

interface VehicleItemsProps {
	vehicle: {
		id: string;
		vehicle: string;
		brand: string;
		year: number;
		sold: boolean;
	};
	onVehicleClick: (vehicleId: string) => void;
	isSelected: boolean;
}

export function VehicleItem({
	vehicle,
	onVehicleClick,
	isSelected,
}: VehicleItemsProps) {
	function handleClick() {
		onVehicleClick(vehicle.id);
	}

	return (
		<Container selected={isSelected} onClick={handleClick}>
			<div>
				<span className="vehicle-brand">{vehicle.brand}</span>
				<span className="vehicle-name">{vehicle.vehicle}</span>
				<span className="vehicle-year">{vehicle.year}</span>
			</div>

			<div className="image-container">
				{vehicle.sold ? (
					<Image {...tagSoldImg} alt="Vendido" />
				) : (
					<Image {...tagImg} alt="Disponível" />
				)}
			</div>
		</Container>
	);
}
