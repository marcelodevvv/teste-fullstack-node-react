import styled from 'styled-components';

export const Button = styled.button`
	padding: 13px 35px 13px 35px;
	border: 0;
	background: ${({ theme }) => theme.colors.gray['600']};
	color: ${({ theme }) => theme.colors.gray['100']};
	font-size: 17px;
	display: flex;
	flex-shrink: 1;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background: ${({ theme }) => theme.colors.gray['800']};
	}

	> span {
		margin-left: 20px;
	}
`;
