import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import ArticleLayout from "../components/layouts/Article";

const NotFound = () => {
  return (
    <ArticleLayout>
      <Container align="center" pt={"20vh"}>
        <Heading as="h1" fontSize={{ base: "2rem", md: "4rem" }}>
          Oops!
        </Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Container>
    </ArticleLayout>
  );
};

export default NotFound;
