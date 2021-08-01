import Image from 'next/image';

import { SearchInput } from '../SearchInput';

import { Container, LogoContainer } from './styles';

export function Header() {
	return (
		<Container>
			<LogoContainer>
				<Image src="/logo.svg" width="150" height="35" alt="Fullstack" />
			</LogoContainer>
			<SearchInput />
		</Container>
	);
}
