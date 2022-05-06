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
  Heading: {
    variants: {
      "section-title": {
        marginTop: 8,
        textDecoration: "underline",
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
        textDecorationColor: "#525252",
        fontSize: 20,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#4BE3AC", "whiteAlpha.900")(props),
      textUnderlineOffset: 8,
    }),
  },
};

const fonts = {
  heading: "Merriweather Sans",
  body: "M PLUS Rounded 1c",
  // body: "Titillium Web",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, components, fonts });

export default theme;

// colors
// neon glow (secondary): #39FF14
// neon (secondary-2-texts): #2eb116

// neon green with teal
// green: #94FC13
// teal: #4BE3AC
