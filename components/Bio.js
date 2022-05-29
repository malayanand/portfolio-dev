import { Box, Heading, Text } from "@chakra-ui/react";
import Section from "./section";

const Bio = () => {
  return (
    <Section delay={0.2}>
      <Heading mt={10} as="h1" variant="section-title">
        Bio
      </Heading>
      <Box pl={2} mt={6} display="inline-block">
        <Box p={1} display="flex" flexDirection="row">
          <Text color={""} fontWeight={"bold"} pr={6}>
            1998
          </Text>
          <Text>Born in Guwahati, Assam</Text>
        </Box>
        <Box p={1} display="flex" flexDirection="row">
          <Text color={""} fontWeight={"bold"} pr={6}>
            2017
          </Text>
          <Text>Completed school from DPS Mathura Road, New Delhi</Text>
        </Box>
        <Box p={1} display="flex" flexDirection="row">
          <Text color={""} fontWeight={"bold"} pr={6}>
            2021
          </Text>
          <Text>Interned @Ostabay as Backend Developer (4 months)</Text>
        </Box>
        <Box p={1} display="flex" flexDirection="row">
          <Text color={""} fontWeight={"bold"} pr={6}>
            2022
          </Text>
          <Text>
            Bachelor&apos;s of Engineering, Computer Science @VTU Bangalore
          </Text>
        </Box>
        <Box p={1} display="flex" flexDirection="row">
          <Text color={""} fontWeight={"bold"} pr={6}>
            Presently
          </Text>
          <Text>
            Spending time learning advanced DS and Algo alongside AI&ML
          </Text>
        </Box>
      </Box>
    </Section>
  );
};

export default Bio;
