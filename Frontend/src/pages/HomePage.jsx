import { Box, Heading, Image } from "@chakra-ui/react";
import "./style.css"

export default function HomePage(){


    return <Box mt="60px">

        <Heading size={"4xl"}>Welcome</Heading>
        <Image margin={"auto"} w="90%" mt={"100px"} src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="></Image>
    </Box>
}