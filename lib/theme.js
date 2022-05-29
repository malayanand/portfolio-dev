import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FFF2F2", "#1a1919")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": (props) => ({
        marginTop: 8,
        textDecoration: "underline",
        textUnderlineOffset: 6,
        textDecorationThickness: 4,
        textDecorationColor: mode("#f47d7d73", "#525252")(props),
        fontSize: 20,
      }),
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
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  grassTeal: "#88ccca",
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;

// colors
// neon glow (secondary): #39FF14
// neon (secondary-2-texts): #2eb116

// neon green with teal
// green: #94FC13
// teal: #4BE3AC

// color 1
//#FFF2F2 main
//ef9f9f text
//FAD4D4 cards
