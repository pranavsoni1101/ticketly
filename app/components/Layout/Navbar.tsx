"use client"

import React from "react";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import { ColorModeButton } from "../../../components/ui/color-mode";


const Navbar = () => {
  return (
    <Container
      bg={{_light: "red.400", _dark: "red.800"}}
      maxWidth={"100%"}
      maxH={"4em"}
      height={"3em"}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Heading>Logo</Heading>
      <Flex
        gap={"1.5em"}
        alignItems={"center"}
      >
        <ColorModeButton />
        <Text>Link1</Text>
        <Text>Link2</Text>
        <Text>Link3</Text>
      </Flex>
    </Container>
  );
};

export default Navbar;
