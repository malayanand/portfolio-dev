import { Container, Box } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Box>
      <Nav />
      <Container pt={16} maxW="container.md">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
