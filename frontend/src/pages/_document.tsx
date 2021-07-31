import { Fragment } from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const styledComponentsSheet = new ServerStyleSheet();
		const materialSheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledComponentsSheet.collectStyles(
							materialSheets.collect(<App {...props} />)
						),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<Fragment>
						{initialProps.styles}
						{materialSheets.getStyleElement()}
						{styledComponentsSheet.getStyleElement()}
					</Fragment>
				),
			};
		} finally {
			styledComponentsSheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
