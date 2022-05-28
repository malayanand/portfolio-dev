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
import ThemeToggle from "../Theme-toggle-button";

const LinkItem = ({ href, path, children, isExternal, ...props }) => {
  const active = path === href;
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? "#C1F8CF" : undefined}
        color={active ? "#1a1919" : "gray200"}
        isExternal={isExternal}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Nav = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      w="100%"
      as="nav"
      p={2}
      css={{ backdropFilter: "blur(3px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        justifyContent={"space-between"}
        align="center"
        maxW="container.lg"
        flexWrap={true}
        // p={4}
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
          spacing={4}
          align="center"
          width={{ base: "full", md: "auto" }}
          mr={{ md: "-14rem", lg: "-22rem" }}
        >
          <LinkItem href="/" path={path} isExternal={false}>
            Home
          </LinkItem>
          <LinkItem href="/works" path={path} isExternal={false}>
            Works
          </LinkItem>
          <LinkItem
            display="inline-flex"
            style={{ gap: 4 }}
            alignItems="center"
            href="https://github.com/malayanand/portfolio-dev"
            path={path}
            isExternal={true}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>
        <ThemeToggle />
        <Box
          display={{ base: "inline-block", md: "none" }}
          ml={{ base: "-12rem" }}
        >
          <Menu isLazy p={2}>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem>Home</MenuItem>
              </NextLink>
              <NextLink href="/works" passHref>
                <MenuItem>Works</MenuItem>
              </NextLink>
              <NextLink href="https://github.com/malayanand" passHref>
                <MenuItem>Source</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
