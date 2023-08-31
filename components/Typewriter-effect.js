import TypeIt from "typeit-react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Typewriter = (props) => {
  return (
    <Box
      className="typewriter"
      textAlign={"left"}
      color={"#4F4D4D"}
      fontSize={{ base: "0.9rem", md: "1rem" }}
    >
      <TypeIt
        // speed="10"
        // autoStart = "true"
        options={{
          loop:false,
          cursor: "#F47C7C",
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Currently a software developer @ Daimler Truck Innovation Center India")
            .pause(750)

          // Remember to return it!
          return instance;
        }}
      />
    </Box>
  );
};

export default Typewriter;
