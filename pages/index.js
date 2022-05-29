import Head from "next/head";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Bio from "../components/Bio";
import Section from "../components/section";
import Paragraph from "../components/Paragraph";
import Socials from "../components/Socials";
import ArticleLayout from "../components/layouts/Article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Typewriter from "../components/Typewriter-effect";

export default function Home() {
  return (
    <ArticleLayout>
      <Box
        display={{ md: "flex" }}
        flexDirection="column"
        justify-content="space-evenly"
        align="center"
        w="100%"
        h="100vh"
        p={4}
      >
        <Box pt={"12vh"}>
          <Box
            mt={16}
            fontWeight="bold"
            color={useColorModeValue("#F47C7C", "#4BE3AC")}
          >
            <h5 fontSize={{ base: "1rem", md: "1.6rem" }} align="left">
              Full Stack / Software Engineer
            </h5>
          </Box>
          <Heading
            fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
            align="left"
            as="h2"
            variant="hero-title"
            mt={5}
          >
            Hi👋 there
          </Heading>
          <Heading
            fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
            align="left"
            as="h2"
            variant="hero-title"
          >
            I&apos;m Malay, a final year undergrad
          </Heading>
        </Box>
        <Typewriter />
      </Box>

      <Container maxW="container.sm">
        <Head>
          <title>Malay Anand | Home</title>
          <meta name="description" content="Portfolio website" />
          <meta
            name="keywords"
            content="Malay Anand portfolio website, resume"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Section delay={0.1}>
          <Heading mb={5} as="h1" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Malay is a Full Stack / Backend developer. He has experience working
            as a backend developer with Django Framework and a knack for
            learning new technologies and tech stacks. Previously he was working
            as an intern at a startup called
            <NextLink href="">
              <Link
                color="#4BE3AC
"
              >
                {" "}
                Ostabay
              </Link>
            </NextLink>
            . He enjoys dealing with and solving real-world problems. Apart from
            backend development he also has an interest in frontend designing.
          </Paragraph>
          <Box align="center" mt={2}>
            <NextLink href="/works" passHref>
              <Button
                align="center"
                variant={"solid"}
                colorScheme={"teal"}
                mt={4}
              >
                Portfolio
                <ChevronRightIcon pl={1} />
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Bio />
        <Socials />
      </Container>
    </ArticleLayout>
  );
}
