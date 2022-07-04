import React from 'react';
import { Flex, Heading, Stack,Text } from '@chakra-ui/react';

function App() {
  return (
    <Flex align={"center"} bg="gray.200" justify="center" w={"100vw"} h="100vh">
      <Stack p="5%" bg="gray.300" rounded={"10px"}> 
        <Heading>Hi there 🥳</Heading>
        <br />
        <Text textAlign={"center"}>Please get started!</Text>
      </Stack>
    </Flex>
  );
}

export default App;
