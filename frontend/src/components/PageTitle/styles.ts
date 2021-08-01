import styled from 'styled-components';

export const Container = styled.header`
	height: 60px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray['300']};

	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		color: ${({ theme }) => theme.colors.gray['800']};
		font-size: 21px;
		line-height: 60px;
		text-transform: uppercase;
	}

	button {
		background: transparent;
		border: 0;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		cursor: pointer;
		transition: background 0.2s;

		&:hover {
			background: rgba(0, 0, 0, 0.1);
		}
	}
`;
