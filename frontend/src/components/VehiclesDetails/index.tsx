import { useMemo } from 'react';
import Image from 'next/image';

import tagImg from '/public/tag.svg';
import tagSoldImg from '/public/tag_sold.svg';
import editImg from '/public/edit.svg';
import { Sticky } from '../Sticky';

import { useVehicle } from '../../hooks/useVehicle';

import { Container, Card, FlexGrid, EditButton } from './styles';
import { NoContent } from '../NoContent';

export function VehiclesDetails() {
	const { vehicles, selectedVehicle } = useVehicle();

	const vehicle = useMemo(() => {
		return vehicles.find((vehicle) => vehicle.id === selectedVehicle);
	}, [vehicles, selectedVehicle]);

	return (
		<Sticky>
			<Container>
				<h3>Detalhes</h3>

				{vehicle ? (
					<Card>
						<div>
							<h1>{vehicle.vehicle}</h1>
							<FlexGrid>
								<div>
									<span className="title">Marca</span>
									<span className="title">Ano</span>
								</div>
								<div>
									<span className="brand-value">{vehicle.brand}</span>
									<span>{vehicle.year}</span>
								</div>
							</FlexGrid>

							<p>{vehicle.description}</p>
						</div>

						<footer>
							<EditButton>
								<Image {...editImg} alt="Editar" />
								<span>EDITAR</span>
							</EditButton>

							{vehicle.sold ? (
								<Image {...tagSoldImg} alt="Vendido" />
							) : (
								<Image {...tagImg} alt="Disponível" />
							)}
						</footer>
					</Card>
				) : (
					<NoContent>Selecione um veículo para ver mais informações</NoContent>
				)}
			</Container>
		</Sticky>
	);
}
