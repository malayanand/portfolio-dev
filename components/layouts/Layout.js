import { Container, Box } from "@chakra-ui/react";
import Nav from "./Nav";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <Box>
      <Nav />
      <Container pt={16} maxW="container.md">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
