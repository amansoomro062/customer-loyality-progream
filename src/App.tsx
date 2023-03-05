import React from 'react';
import { Flex, Heading, Stack,Text } from '@chakra-ui/react';
import HomePage from './components/HomePage';
import PaymentForm from './components/Payment';
import RewardPointsScreen from './components/ProductDisplay';

function App() {
  return (
    <div>

      {/* <HomePage /> */}

      {/* <Flex h="100vh" w="100vw" align={"center"} justify="center">
        <Stack >
        <PaymentForm/>

        </Stack>
      </Flex> */}
      <RewardPointsScreen/>
    </div>
  );
}

export default App;
