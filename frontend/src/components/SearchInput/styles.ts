import styled from 'styled-components';

export const StyledInput = styled.input`
	flex: 1;
	height: 100%;
	margin-left: 10px;
	padding: 0 22px;

	outline: 0;
	border: 0;
	background: ${({ theme }) => theme.colors.gray['900']};

	font-size: 15px;
	color: ${({ theme }) => theme.colors.gray['200']};

	::placeholder {
		color: ${({ theme }) => theme.colors.gray['300']};
	}
`;
