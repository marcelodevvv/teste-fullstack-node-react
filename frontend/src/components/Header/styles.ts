import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 60px;
	background: ${({ theme }) => theme.colors.gray['800']};

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 0 0 ${({ theme }) => theme.dimensions.borderMargin};

	@media (max-width: 600px) {
		padding: 0;
		height: unset;
		flex-direction: column;
	}
`;

export const LogoContainer = styled.div`
	flex: 1;
	height: 35px;
	margin: 0 10px;

	@media (max-width: 600px) {
		margin: 10px 10px;
		flex-direction: column;
	}
`;
