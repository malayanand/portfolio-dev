import { Box, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <Box
      aria-label="Logo"
      mt={2}
      display="flex"
      flexDirection="row"
      cursor={"pointer"}
      mr={12}
    >
      <NextLink href="/">
        <Heading as="h1" size="md">
          Malay Anand
        </Heading>
      </NextLink>
    </Box>
  );
};

export default Logo;
