import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 60px;
	background: ${({ theme }) => theme.colors.gray['800']};

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 0 0 ${({ theme }) => theme.dimensions.borderMargin};
`;

export const LogoContainer = styled.div`
	flex: 1;
	height: 35px;
	margin: 0 10px;
`;
