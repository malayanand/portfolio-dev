import { Box, LinkBox, LinkOverlay, Image, Text } from "@chakra-ui/react";

export const WorkGridItem = ({ children, thumbnail, href, title }) => (
  <Box w="100%" align="center">
    <LinkBox cursor={"pointer"}>
      <Image src={thumbnail} alt={title} loading="lazy" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
);
