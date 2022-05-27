import { SimpleGrid, Heading } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Head from "next/head";
import Section from "../components/section";

const Works = () => {
  return (
    <Section delay={0.1}>
      <Head>
        <title>Malay Anand | Works</title>
        <meta name="description" content="Portfolio website" />
        <meta
          name="keywords"
          content="Malay Anand portfolio website, resume, works"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h3" fontSize={"20px"} variant="section-title" mb={8}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <WorkGridItem
          href="https://github.com/malayanand/BlogApp_BLOGGERs"
          title="Blog App"
          date="January 2022"
          stack={["Django", "Django REST Framework", "ReactJS"]}
        >
          A simple blogging application with all the CRUD functionalities.
        </WorkGridItem>
        <WorkGridItem
          href="https://github.com/malayanand/Sort-Visualizer-library-C-"
          title="Sort Visualizer"
          date="June 2021"
          stack="C++ | OpenGL"
        >
          This is a light weight library that can visualize a sorting algorithm
          passed to the visualizer.
        </WorkGridItem>
        <WorkGridItem
          href="https://github.com/malayanand/Path-Finding-Visualizer-"
          title="Path Visualizer"
          date="March 2020"
          stack="Python | Pygame"
        >
          A path finding visualizer for different algorithms including popular
          AI algorithm like A* Search, developed using the popular pygame module
          in python.
        </WorkGridItem>
      </SimpleGrid>
    </Section>
  );
};

export default Works;

{
  /* <WorkGridItem
          thumbnail="/images/works/fuel-app/Login_1.png"
          href="https://github.com/malayanand/BlogApp_BLOGGERs"
          title="Fuel"
        >
          An ideation for an android application for fuel/car services delivery.
        </WorkGridItem>
        <WorkGridItem
          thumbnail="/images/works/fuel-app/Login_1.png"
          href="https://github.com/malayanand/BlogApp_BLOGGERs"
          title="Fuel"
        >
          An ideation for an android application for fuel/car services delivery.
        </WorkGridItem>
        <WorkGridItem
          thumbnail="/images/works/fuel-app/Login_1.png"
          href="https://github.com/malayanand/BlogApp_BLOGGERs"
          title="Fuel"
        >
          An ideation for an android application for fuel/car services delivery.
        </WorkGridItem>
        <WorkGridItem
          thumbnail="/images/works/fuel-app/Login_1.png"
          href="https://github.com/malayanand/BlogApp_BLOGGERs"
          title="Fuel"
        >
          An ideation for an android application for fuel/car services delivery.
        </WorkGridItem> */
}
