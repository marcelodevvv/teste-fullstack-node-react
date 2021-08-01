import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;

	main {
		display: block;
		margin: 55px ${({ theme }) => theme.dimensions.borderMargin} 20px;
		padding: 0 10px;

		> div {
			margin-top: 30px;
			display: flex;
			justify-content: space-between;
		}
	}
`;
