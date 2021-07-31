import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	);
}
