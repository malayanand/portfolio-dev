import { Container, Box } from "@chakra-ui/react";
import Nav from "./Nav";
import Footer from "../Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import VoxelFace from "../voxel-face";
// import VoxelFace from "../components/voxel-face";
import NoSsr from "../no-ssr";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Malay's homepage" />
        <meta name="author" content="Malay Anand" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Malay Anand" />
        <meta name="og:title" content="Malay Anand" />
        <meta property="og:type" content="website" />
      </Head>

      <Nav path={router.asPath} />
      <Container pt={16} maxW="container.md">
        {/* <NoSsr>
          <VoxelFace />
        </NoSsr> */}
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;

{
  /* <meta name="twitter:title" content="Takuya Matsuyama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */
}
