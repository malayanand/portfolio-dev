import Head from "next/head";
import NextLink from "next/link";
import { Container, Box, Heading, Link } from "@chakra-ui/react";
import Bio from "../components/Bio";
import Section from "../components/section";
import Paragraph from "../components/Paragraph";
import GlowButton from "../components/glow-button";
import Socials from "../components/Socials";

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
        mt={20}
        display={{ md: "flex" }}
        flexDirection="row"
        justify-content="space-evenly"
        align="center"
        mb={16}
      >
        <Box>
          <Box mt={16} fontWeight="bold" color="#4BE3AC">
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
            {/* ,<span> I am Malay Anand</span> */}
          </Heading>
          <Heading
            fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
            align="left"
            as="h2"
            variant="hero-title"
          >
            I'm <span>Malay</span>, a final year undergrad
          </Heading>
        </Box>
        {/* <Box>
          <Image src={testimg} alt="Dan Abramov" />
        </Box> */}
      </Box>
      {/* <Box
        width="100%"
        align="center"
        bgColor={useColorModeValue("#ffa4a436", "#ffffff14")}
        p={3}
        borderRadius={6}
        mt={6}
      >
        <p>I am a final year undergrad student</p>
      </Box> */}

      {/* <Box ml={{ md: 6 }} mt={4}>
        <Box align="center">
          <Image
            src="/images/profileimage.jpg"
            alt="Malay Anand"
            objectFit="cover"
            borderRadius="full"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            boxSize="120px"
          />
        </Box>
      </Box> */}

      <Section delay={0.1}>
        <Heading mb={5} as="h1" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Malay is a Full Stack / Backend developer. He has experience working
          as a backend developer with Django Framework and a knack for learning
          new technologies and tech stacks. Previously he was working as an
          intern at a startup called
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
          <GlowButton href="/works">Portfolio</GlowButton>
        </Box>
      </Section>

      <Bio />
      <Socials />
    </Container>
  );
}
