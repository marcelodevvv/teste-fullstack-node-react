import styled from 'styled-components';
import { Card } from '@material-ui/core';

interface ContainerProps {
	selected: boolean;
}

export const Container = styled(Card)<ContainerProps>`
	&& {
		padding: 12px 27px 12px 12px;
		background: ${({ selected, theme }) =>
			selected ? theme.colors.gray['100'] : '#fff'};

		display: flex;
		justify-content: space-between;
		align-items: center;

		& + & {
			margin-top: 10px;
		}

		> div > span {
			display: block;
			line-height: 18px;

			&.vehicle-brand {
				text-transform: uppercase;
				color: ${({ theme }) => theme.colors.gray['800']};
			}

			&.vehicle-name {
				color: ${({ theme }) => theme.colors.green['800']};
			}

			&.vehicle-year {
				color: ${({ theme }) => theme.colors.gray['500']};
			}
		}
	}
`;
