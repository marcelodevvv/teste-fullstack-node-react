import Image from 'next/image';

import tagImg from '/public/tag.svg';
import tagSoldImg from '/public/tag_sold.svg';
import editImg from '/public/edit.svg';
import { Sticky } from '../Sticky';

import { Container, Card, FlexGrid, EditButton } from './styles';

export function VehiclesDetails() {
	const sold = false;

	return (
		<Sticky>
			<Container>
				<h3>Detalhes</h3>

				<Card>
					<div>
						<h1>Palio G5 SP.1.6 Flex</h1>
						<FlexGrid>
							<div>
								<span className="title">Marca</span>
								<span className="title">Ano</span>
							</div>
							<div>
								<span>FIAT</span>
								<span>2016</span>
							</div>
						</FlexGrid>

						<p>
							O Palio é um automóvel compacto produzido pela Fiat, tendo sido projetado
							para Mercados emergentes os da América Latina, África do Sul, Leste
							Europeu e alguns países Asiáticos. Seu projeto foi iniciado em 1992, pelo
							Centro de Estilo da Fiat junto ao estúdio I.DE.A. A Fiat já contava com
							um produto de tamanho similar para o mercado europeu, o Punto, lançado em
							1993 para substituir o Uno, que já contava com 12 anos de mercado. O
							projeto, chamado de 178, teria uma suspensão mais simples e robusta e, ao
							contrário do Punto, daria origem uma grande família de produtos.
						</p>
					</div>

					<footer>
						<EditButton>
							<Image {...editImg} alt="Editar" />
							<span>EDITAR</span>
						</EditButton>

						{sold ? (
							<Image {...tagSoldImg} alt="Vendido" />
						) : (
							<Image {...tagImg} alt="Disponível" />
						)}
					</footer>
				</Card>
			</Container>
		</Sticky>
	);
}
