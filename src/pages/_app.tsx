import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import Layout from "../templates/Layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
