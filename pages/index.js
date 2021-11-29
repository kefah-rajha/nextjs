import Head from 'next/head'
import Navbar from "../compoenent/navbar"
import TextHeader from "../compoenent/header.text"
import Image from 'next/image'
import {
  Box,
  Flex,
  Container,
  Text
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css'


export default function Home() {
 
  return (
    <Box   backgroundImage="url('/mywebsitbackground@1x.png')" w="100%" h="100vh" color="white">
     <Flex >
     <Container maxW="container.lg">
       <Navbar/>
       <Box>
         

       <TextHeader/>
       </Box>

        </Container>
     </Flex>





</Box>
  )
}
