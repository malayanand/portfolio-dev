import TypeIt from "typeit-react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Typewriter = (props) => {
  return (
    <Box
      className="typewriter"
      textAlign={"left"}
      color={useColorModeValue("#F47C7C", "#4BE3AC")}
      fontSize={{ base: "0.9rem", md: "1rem" }}
    >
      <TypeIt
        // speed="10"
        // autoStart = "true"
        options={{
          loop: true,
          cursor: "#F47C7C",
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Django")
            .pause(750)
            .delete(6)
            .pause(500)
            .type("Python, C/C++")
            .pause(750)
            .delete(13)
            .type("React JS, Next JS");

          // Remember to return it!
          return instance;
        }}
      />
    </Box>
  );
};

export default Typewriter;
