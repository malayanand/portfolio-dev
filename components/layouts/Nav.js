import { Box, Container, Heading, Stack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "./Logo";

const LinkItem = ({ href, children, isExternal }) => {
  return (
    <NextLink href={href} passHref>
      <Link isExternal={isExternal}>{children}</Link>
    </NextLink>
  );
};

const Nav = () => {
  return (
    <Box w="100%" as="nav" p={2} css={{ backdropFilter: "blur(6px)" }}>
      <Container
        display="flex"
        justifyContent={"space-between"}
        align="center"
        maxW="container.lg"
        flexWrap={true}
        p={4}
      >
        {/* <Box align="center">
          <Heading as="h1" size="lg" letterSpacing={3}>
            Malay Anand
          </Heading>
        </Box> */}

        <Logo />

        <Stack
          direction={["column", "row"]}
          display={{ base: "none", md: "flex" }}
          // justify="space-between"
          spacing={6}
          align="center"
          width={{ base: "full", md: "auto" }}
        >
          <LinkItem href="/" isExternal={false}>
            Home
          </LinkItem>
          <LinkItem href="/Works" isExternal={false}>
            Works
          </LinkItem>
          <LinkItem href="https://github.com/malayanand" isExternal={true}>
            Source
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  );
};

export default Nav;
