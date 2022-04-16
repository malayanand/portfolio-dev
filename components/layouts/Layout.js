import { Container } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxW="md">{children}</Container>
    </>
  );
};

export default Layout;
