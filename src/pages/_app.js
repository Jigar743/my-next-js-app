import Layout from "../Component/Layout/Layout";
import { GlobalStyle } from "../styles/global.styled";
import CustomThemeProvider from "../Component/Provider/Provider";


export default function App({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
}
