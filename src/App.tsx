import React from 'react';
import { Flex, Heading, Stack,Text } from '@chakra-ui/react';
import HomePage from './components/HomePage';
import ProductScreen from './components/ProductScreen';
import OrderScreen from './components/CartScreen';
import CartScreen from './components/CartScreen';

function App() {
  return (
    <div>

      {/* <HomePage /> */}
      {/* <ProductScreen/> */}
      <CartScreen/>
    </div>
  );
}

export default App;
