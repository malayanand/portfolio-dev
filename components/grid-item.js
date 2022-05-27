import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Heading,
  Badge,
} from "@chakra-ui/react";
import NextLink from "next/link";
// import Paragraph from "./Paragraph";
import Tags from "../components/tags";

export const WorkGridItem = ({ children, href, title, date, stack }) => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent={"space-between"}
    alignItems={"center"}
    // h={80}
  >
    <Box
      w="100%"
      h="100%"
      background={"#121212"}
      p={6}
      borderRadius={10}
      mb={4}
    >
      <NextLink href={href} scroll={false}>
        <LinkBox cursor={"pointer"}>
          <LinkOverlay href={href} target="_blank">
            <Heading size={"sm"} mt={2}>
              {date}
            </Heading>
            <Heading size={"lg"} mt={6}>
              {title}
            </Heading>
          </LinkOverlay>
          <Text color={"#808080"} mt={4}>
            {children}
          </Text>
          <Box mt={12} display={"flex"} flexDir={"row"}>
            <Text fontSize={15}>{stack}</Text>
          </Box>
          {/* {stack.map((tag) => (
            <Badge colorScheme={"teal"}>{tag}</Badge>
          ))} */}
          {/* <Tags>Django</Tags> */}
        </LinkBox>
      </NextLink>
    </Box>
  </Box>
);
