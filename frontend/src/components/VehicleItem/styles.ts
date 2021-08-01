import styled from 'styled-components';
import { Card } from '@material-ui/core';

interface ContainerProps {
	selected: boolean;
}

export const Container = styled(Card)<ContainerProps>`
	&& {
		cursor: pointer;
		margin-top: 10px;
		padding: 12px 27px 12px 12px;
		background: ${({ selected, theme }) =>
			selected ? theme.colors.gray['100'] : '#fff'};
		transition: background-color 0.2s;

		display: flex;
		justify-content: space-between;
		align-items: center;

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

		&:hover {
			background: ${({ selected, theme }) =>
				selected ? theme.colors.gray['100'] : '#F3F3F3'};
		}
	}
`;
