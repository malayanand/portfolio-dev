import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const WorkGridItem = ({ children, href, title, date, stack }) => (
  <Box
    display="flex"
    flexDir="column"
    justifyContent={"space-between"}
    alignItems={"center"}
    aria-label="card"
    // h={80}
  >
    <Box
      w="100%"
      h="100%"
      background={useColorModeValue("#FAD4D4", "#121212")}
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
        </LinkBox>
      </NextLink>
    </Box>
  </Box>
);
