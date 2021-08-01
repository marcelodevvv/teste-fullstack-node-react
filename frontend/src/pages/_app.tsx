import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

import 'react-toastify/dist/ReactToastify.css';

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
			<ToastContainer
				position="top-right"
				autoClose={5000}
				closeOnClick
				pauseOnHover
			/>
		</ThemeProvider>
	);
}
