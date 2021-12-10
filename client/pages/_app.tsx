import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import Head from 'next/head';
import Layout from '../layout/index';

const HeadTag = () => (
  <Head>
    <title>Mini-ShoppingMall</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <HeadTag />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
