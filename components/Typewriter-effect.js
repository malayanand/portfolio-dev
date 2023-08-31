import TypeIt from "typeit-react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Typewriter = (props) => {
  return (
    <Box
      className="typewriter"
      textAlign={"left"}
      color={useColorModeValue("#4BE3AC","#f47c7c")}
      fontSize={{ base: "1rem", md: "1.4rem" }}
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
            .type("Currently Software Developer @ Daimler Truck Innovation Center India")
            .pause(750)

          // Remember to return it!
          return instance;
        }}
      />
    </Box>
  );
};

export default Typewriter;
