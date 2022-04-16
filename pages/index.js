import Head from "next/head";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="container.md" p={4}>
      <Head>
        <title>Malay Anand | Home</title>
        <meta name="description" content="Portfolio website" />
        <meta name="keywords" content="Malay Anand portfolio website, resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Welcome</h3>
        <p>Hi there, I am Malay</p>
      </main>
    </Container>
  );
}
