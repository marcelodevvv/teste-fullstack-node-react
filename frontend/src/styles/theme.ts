import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme<Theme>({
	colors: {
		gray: {
			'100': '#f1f2f0',
			'200': '#e2e4e1',
			'300': '#a4a5a3',
			'400': '#8f9597',
			'500': '#798083',
			'600': '#45535a',
			'700': '#454545',
			'800': '#364147',
			'900': '#2a3138',
		},
		green: {
			'500': '#189e6d',
			'700': '#4c8d74',
			'800': '#1d7555',
		},
	},
	fonts: {
		heading: 'Roboto',
		body: 'Roboto',
	},
	styles: {
		global: {
			body: {
				bg: 'gray.200',
				color: 'gray.800',
			},
		},
	},
});
