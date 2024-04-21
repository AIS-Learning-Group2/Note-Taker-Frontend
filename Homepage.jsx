import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import noteImage from "../assets/AIS_Logo2.png"

export default function Homepage(){



    return <Box padding={8}>
        <br/>
        <Image position={"absolute"} right={0} w={650} src={noteImage} style={{ borderRadius: '50%' }}/>
        
        <Heading mt={16} textAlign={"start"} fontSize={"90px"} fontFamily={"Times New Romans"}>AIS Learning Note Taker</Heading>
        <br/><br/>
        <Text 
            maxW={"50%"} 
            textAlign={"justify"} 
            fontStyle={"italic"} 
            fontSize={"24px"}
            fontFamily={"cursive"}
            fontWeight={"bold"}
            >
                AIS Learning sparks triumph in Sri Lankan students,
                fueling academic brilliance through vibrant e-learning journeys in mathematics,
                science, and computer science—where success is not just a goal, but a thrilling adventure...
                <br/><br/>
                Unlock your potential by committing to learning and keeping notes. 
                With consistent effort and a willingness to learn, you can achieve your goals 
                and grow as an individual. Remember, </Text>
                <Text
                    maxW={"50%"} 
                    textAlign={"justify"} 
                    fontStyle={"italic"} 
                    fontSize={"30px"}
                    color={"navy"}
                    fontFamily={"cursive"}
                    ml={14}
                    fontWeight={"bold"}>
                "knowledge is power, and taking notes is the key to 
                retaining that power. Make the most of your potential and start taking notes today!!!"
        </Text>

    </Box>

        

    
}