import { Button } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.green['500']};
	margin-bottom: 20px;
`;

export default function Home() {
	return (
		<Container>
			<Title>Home Page Title with styled-components and</Title>
			<Button variant="contained" color="primary">
				Material-UI
			</Button>
		</Container>
	);
}
