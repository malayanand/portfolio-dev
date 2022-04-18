import {
  Box,
  Container,
  Stack,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import NextLink from "next/link";
import Logo from "../Logo";

const LinkItem = ({ href, children, isExternal, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link isExternal={isExternal} {...props}>
        {children}
      </Link>
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
          <LinkItem
            display="inline-flex"
            style={{ gap: 4 }}
            alignItems="center"
            href="https://github.com/malayanand"
            isExternal={true}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <Box display={{ base: "inline-block", md: "none" }}>
          <Menu isLazy p={2}>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Works</MenuItem>
              <MenuItem>Source</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
