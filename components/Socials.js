import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import Section from "./section";
import NextLink from "next/link";
import { DiGithubBadge } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const SocialButton = ({ children, href, icon, ...props }) => {
  return (
    <Link href={href} target="_blank" style={{ textDecoration: "none" }}>
      <Box
        as="button"
        aria-label="social links"
        display={"flex"}
        // justifyContent={"space-evenly"}
        mt={1}
        ml={2}
        height={"3rem"}
        width={"10rem"}
        alignContent={"left"}
        textAlign={"center"}
        color="#4BE3AC"
        borderRadius={8}
        fontWeight={"bold"}
        pt={2}
        pr={4}
        pb={2}
        // p={4}
        _hover={{
          bg: "#4be3ac26",
          textDecoration: "underline",
          textUnderlineOffset: "0.2em",
          textDecorationColor: "#C1F8CF",
          textDecorationThickness: "0.15em",
          transition:
            "background-color 100ms linear, text-decoration 1000ms linear",
        }}
        {...props}
      >
        <Box align={"center"} pt={1} ml={4} mr={4} aria-label="social-icons">
          {icon}
        </Box>
        {children}
      </Box>
    </Link>
  );
};

const Socials = () => {
  return (
    <Section delay={0.3}>
      <Heading mb={4} as="h1" variant="section-title">
        Connect
      </Heading>
      <List>
        <ListItem>
          <SocialButton
            align="center"
            icon={<IoLogoLinkedin size={"1rem"} />}
            href="https://www.linkedin.com/in/anandmalay"
          >
            LinkedIn
          </SocialButton>
        </ListItem>
        <ListItem>
          <SocialButton
            align="center"
            icon={<SiLeetcode size={"1.2rem"} />}
            href="https://leetcode.com/_malayanand/"
          >
            Leetcode
          </SocialButton>
        </ListItem>
        <ListItem>
          <SocialButton
            align="center"
            icon={<GrInstagram size={"1rem"} />}
            href="https://www.instagram.com/_malayanand/"
          >
            Instagram
          </SocialButton>
        </ListItem>
        <ListItem>
          <SocialButton
            align="center"
            icon={<DiGithubBadge size={"1.4rem"} />}
            href="https://github.com/malayanand"
          >
            GitHub
          </SocialButton>
        </ListItem>
      </List>
    </Section>
  );
};

export default Socials;
