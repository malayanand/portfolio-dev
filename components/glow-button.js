import { background, Box } from "@chakra-ui/react";
import NextLink from "next/link";

const GlowButton = ({ children, href, ...props }) => {
  return (
    // #39FF14
    // #dc2ccb
    <NextLink href={href}>
      <Box
        fontSize="1.2rem"
        marginTop="1em"
        marginBottom="1em"
        as="button"
        color="#94FC13"
        padding="0.25em 1em"
        display="inline-block"
        cursor="pointer"
        textDecoration="none"
        border="#94FC13 0.125em solid"
        borderRadius="0.25em"
        textShadow="0 0 1em #94FC13"
        boxShadow="inset 0 0 0.5em 0 #94FC13, 0 0 0.5em 0 #94FC13"
        position="relative"
        _before={{
          content: `""`,
          pointerEvents: "none",
          position: "absolute",
          background: "#94FC13",
          top: "120%",
          left: "0",
          width: "100%",
          height: "100%",
          transform: "perspective(2em) rotateX(40deg) scale(1, 0.35)",
          filter: "blur(1.5em)",
          opacity: "0.7",
        }}
        _after={{
          content: `""`,
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          boxShadow: "0 0 1em 0.4em #94FC13",
          opacity: "0",
          transition: "opacity 100ms linear",
          background: "#94FC13",
          zIndex: "-1",
        }}
        _hover={{
          color: "#1a1919",
          // fontWeight: 100,
          textShadow: "none",
          _after: {
            opacity: "1",
          },
          _before: {
            opacity: "1",
          },
        }}
        _focus={{
          background: "#94FC13",
          color: "whiteAlpha.700",
          textShadow: "none",
        }}
      >
        {children}
      </Box>
    </NextLink>
  );
};

export default GlowButton;
