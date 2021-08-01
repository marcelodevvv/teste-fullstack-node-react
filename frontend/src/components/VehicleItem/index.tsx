import Image from 'next/image';

import tagImg from '/public/tag.svg';
import tagSoldImg from '/public/tag_sold.svg';

import { Container } from './styles';

export function VehicleItem() {
	const sold = false;
	const selected = false;

	return (
		<Container selected={selected}>
			<div>
				<span className="vehicle-brand">FIAT</span>
				<span className="vehicle-name">Palio G5 SP.1.6 Flex</span>
				<span className="vehicle-year">2016</span>
			</div>

			{sold ? (
				<Image {...tagSoldImg} alt="Vendido" />
			) : (
				<Image {...tagImg} alt="Disponível" />
			)}
		</Container>
	);
}
