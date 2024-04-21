import { Box, Flex, Image, VStack, HStack } from "@chakra-ui/react";
import loginImage from "../assets/login.png"
import {
    
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../Redux/users/user.actions";


export default function LoginPage(){
    const nav = useNavigate()
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
        nav("/notes")
    }

    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const dispatch = useDispatch()

    const handleLogin =()=>{
        dispatch(getUser({email,password}))
    }
   

    return <Flex padding={4} w="100%">

        <Image wi={"50%"}  position={"absolute"}  right={0} w={900} h={760} src={loginImage}></Image>
        <VStack w={"50%"}>

            
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login To Your <br/><i>AIS Learning Premium Account</i></Heading>
          <Text fontSize={'lg'} color={'black'} >
          AIS Note Taker is only for Our Premium Users
          </Text>
        </Stack>

        
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={4}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <a href="http://localhost/Learners_Login/update_profilepremium.php"><font style={{ color: '#0096FF' }}>Forgot password?</font></a>
              </Stack>
              <Stack pt={6}>
              <Text align={'center'}>
                Not a Premium User yet? 
                <a href="http://localhost/Learners_Login/checkout.php"><font style={{ color: '#0096FF' }}>Upgrade your Account Now</font></a>
              </Text>
            </Stack>
              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        </VStack>
        
    </Flex>
}