import React from "react";
import { Box, Heading, Flex, Text, Button,Image } from '@chakra-ui/react';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Navbar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      color="white"
      {...props}
    >
      <Flex align="end" mr={5}>
        <Heading >
        <Box> <Image src="/letter_k_PNG65.png" alt="" title=""  height={42}  objectFit="contain"/></Box>

        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
        font-weight= "bold"
      >
        <MenuItems>HOME</MenuItems>
        <MenuItems>ABOUT ME</MenuItems>
        <MenuItems>SKILLS</MenuItems>
        <MenuItems>MY WORK</MenuItems>

      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        color="black"
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="white" size="xs" ml="4">
          FACEBOOK
        </Button>
        <Button bg="white" size="xs" ml="2">
          GIT HUB
        </Button>
      
      </Box>
     
     
    </Flex>
  );
};

export default Navbar;
