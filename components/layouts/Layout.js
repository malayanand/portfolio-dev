import { Container } from "@chakra-ui/react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container maxW="container.md">{children}</Container>
    </>
  );
};

export default Layout;
