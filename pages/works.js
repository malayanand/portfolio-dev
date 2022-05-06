import { SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";

const Works = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={10}>
        <WorkGridItem
          href="https://github.com/malayanand/BlogApp_BLOGGERs"
          title="Blogger's: A blog webapp"
        ></WorkGridItem>
      </SimpleGrid>
    </>
  );
};

export default Works;
