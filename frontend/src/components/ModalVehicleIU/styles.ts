import styled from 'styled-components';
import {
	Modal as ModalUI,
	TextField as TextFieldUI,
	Switch as SwitchUI,
	withStyles,
} from '@material-ui/core';
import styledTheme from '../../styles/theme';

export const Modal = styled(ModalUI)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	background: ${({ theme }) => theme.colors.gray['200']};
	width: 100%;
	max-width: 1000px;
	margin: 0 30px;
	outline: 0;

	padding: 28px 37px;

	h1 {
		font-size: 31px;
		color: ${({ theme }) => theme.colors.gray['800']};
		margin-bottom: 50px;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;

		> * {
			margin-bottom: 56px;
		}
	}

	footer {
		margin-bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		> * {
			margin-left: 10px;
		}
	}
`;

export const ControlGroup = styled.div`
	display: flex;

	> * {
		flex: 1;

		:first-child {
			margin-right: 60px;
		}
	}
`;

export const Switch = withStyles({
	root: {
		'& .Mui-checked': {
			color: styledTheme.colors.gray[600],
		},
		'& .Mui-checked + .MuiSwitch-track': {
			backgroundColor: styledTheme.colors.gray[800],
		},
	},
})(SwitchUI);

export const TextField = withStyles({
	root: {
		fontSize: '14px',

		'& label.Mui-focused': {
			color: styledTheme.colors.gray[800],
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: styledTheme.colors.gray[800],
		},
		'& .MuiInput-underline.Mui-error:after': {
			borderBottomColor: '#f44336',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: styledTheme.colors.gray[600],
			},
			'&:hover fieldset': {
				borderColor: styledTheme.colors.gray[600],
			},
			'&.Mui-focused fieldset': {
				borderColor: styledTheme.colors.gray[800],
			},
		},
	},
})(TextFieldUI);
