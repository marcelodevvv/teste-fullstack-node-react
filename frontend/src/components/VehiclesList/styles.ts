import styled from 'styled-components';

export const Container = styled.div`
	flex: 1;
	margin-right: 10px;

	h3 {
		color: ${({ theme }) => theme.colors.gray['800']};
		font-size: 15px;
		margin-bottom: 14.5px;
	}

	@media (max-width: 600px) {
		margin-right: 0;
	}
`;
