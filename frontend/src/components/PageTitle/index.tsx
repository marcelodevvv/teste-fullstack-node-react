import Image from 'next/image';

import { Container } from './styles';

export interface PageTitleProps {
	title: string;
}

export function PageTitle({ title }: PageTitleProps) {
	return (
		<Container>
			<h1>{title}</h1>
			<button>
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
