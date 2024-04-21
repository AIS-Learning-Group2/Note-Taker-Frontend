import { reactNode } from 'react';
import userIcon from "../../../assets/userIcon.jpg";
import Footer from './Footer'; // Import the Footer component
import logo from "../../../assets/AIS_Logo2.png";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Navibar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"Top"} w={"100%"} bg={"green"} px={4} style={{ boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.95)' }}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box 
            fontWeight={"bold"} 
            color={"white"} 
            fontSize={"25px"} 
            fontStyle={"italic"}
            fontFamily={"monospace"}
            cursor={"pointer"}
            onClick={()=>{
              nav("/")
            }}
          >
            AIS Learning
          </Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>

            <Button bg={"black"} color={"white"} fontWeight={"bold"} _hover={{bg:'gray'}}>
            <a href="http://localhost/Learners_Login/first.php">
                Home
                </a>
              </Button>

              <Button bg={"black"} color={"white"} fontWeight={"bold"} _hover={{bg:'gray'}} onClick={()=>{
                nav("/notes")         //To navigate all the stored notes
              }}>
                My Notes
              </Button>

          
              <Button bg={"black"} color={"white"} fontWeight={"bold"} _hover={{bg:'gray'}} onClick={()=>{
                nav("/login")
              }}>
                Login
              </Button>

              <Button bg={"black"} color={"white"} fontWeight={"bold"} _hover={{bg:'gray'}}> 
                <a href="http://localhost/Learners_Login/checkout.php">Sign-up</a>
              </Button>

              <Button bg={"black"} color={"white"} fontWeight={"bold"} _hover={{bg:'gray'}} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Avatar src={logo}></Avatar>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {/* Include the Footer component */}
      <Footer />
    </>
  )
}
