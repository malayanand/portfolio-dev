import { Box, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <Box mt={2} display="flex" flexDirection="row" cursor={"pointer"}>
      <NextLink href="/">
        <Heading as="h1" size="md">
          Malay Anand
        </Heading>
      </NextLink>
    </Box>
  );
};

export default Logo;
