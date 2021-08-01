import Image from 'next/image';
import { useVehicle } from '../../hooks/useVehicle';

import { Container } from './styles';

export interface PageTitleProps {
	title: string;
}

export function PageTitle({ title }: PageTitleProps) {
	const { addVehicle } = useVehicle();

	return (
		<Container>
			<h1>{title}</h1>
			<button type="button" onClick={addVehicle}>
				<Image
					src="/add_circle.svg"
					width="28"
					height="28"
					alt={`Adicionar ${title}`}
				/>
			</button>
		</Container>
	);
}
