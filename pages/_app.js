import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/Layout";
import theme from "../lib/theme";
import "@fontsource/merriweather-sans/700.css";
import "@fontsource/m-plus-rounded-1c";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
