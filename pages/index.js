import Head from "next/head";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.md">
      <Head>
        <title>Malay Anand | Home</title>
        <meta name="description" content="Portfolio website" />
        <meta name="keywords" content="Malay Anand portfolio website, resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        display={{ md: "flex" }}
        flexDirection="row"
        justify-content="space-evenly"
        align="center"
      >
        <Box>
          <Heading
            fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
            align="left"
            as="h2"
            variant="hero-title"
            mt={10}
          >
            Hi👋 there,<span> I am Malay Anand</span>
          </Heading>
          <br />
          <h5 fontSize={{ base: "1rem", md: "1.5rem" }} align="left">
            Full Stack /
          </h5>
          <h5 fontSize={{ base: "1rem", md: "1.5rem" }} align="left">
            Software Engineer
          </h5>
        </Box>
        {/* <Box>
          <Image src={testimg} alt="Dan Abramov" />
        </Box> */}
      </Box>
      <Box
        width="100%"
        align="center"
        bgColor={useColorModeValue("#ffa4a436", "#ffffff14")}
        p={3}
        borderRadius={6}
        mt={6}
      >
        <p>I am a final year undergrad student</p>
      </Box>
    </Container>
  );
}
