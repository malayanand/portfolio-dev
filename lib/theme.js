import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffeeee", "#1a1919")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props) => ({
      color: mode("#1a1919", "whiteAlpha.900")(props),
      textUnderlineOffset: 8,
    }),
  },
  h5: {
    fontWeight: "bold",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });

export default theme;
