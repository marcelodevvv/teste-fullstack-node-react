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
}

export function VehicleItem({ vehicle }: VehicleItemsProps) {
	const selected = false;

	return (
		<Container selected={selected}>
			<div>
				<span className="vehicle-brand">{vehicle.brand}</span>
				<span className="vehicle-name">{vehicle.vehicle}</span>
				<span className="vehicle-year">{vehicle.year}</span>
			</div>

			{vehicle.sold ? (
				<Image {...tagSoldImg} alt="Vendido" />
			) : (
				<Image {...tagImg} alt="Disponível" />
			)}
		</Container>
	);
}
