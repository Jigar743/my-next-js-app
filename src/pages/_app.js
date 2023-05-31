import Layout from "../Component/Layout/Layout";
import { GlobalStyle } from "../styles/global.styled";
import Provider from "../Component/Provider/Provider";

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <GlobalStyle />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
