import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const NoContent = styled(Card)`
	&& {
		min-height: 100px;
		padding: 12px 27px 12px 12px;

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 16px;
		color: ${({ theme }) => theme.colors.gray['300']};
		text-align: center;
	}
`;
