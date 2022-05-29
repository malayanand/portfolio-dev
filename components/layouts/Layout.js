import { Container, Box } from "@chakra-ui/react";
import Nav from "./Nav";
import Footer from "../Footer";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Software Engineer, Malay Anand, malay, portfolio, full stack developer"
        />
        <meta name="description" content="Malay's homepage" />
        <meta name="author" content="Malay Anand" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta property="og:site_name" content="Malay Anand" />
        <meta name="title" property="og:title" content="Malay Anand" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Portfolio of Malay Anand" />
        <meta property="og:url" content="https://www.malayanand.com/" />
        <meta name="twitter:title" content="Malay Anand" />
      </Head>

      <Nav path={router.asPath} />
      <Container pt={16} maxW="container.md">
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;

{
  /* 
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */
}
