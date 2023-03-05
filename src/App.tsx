import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import HomePage from "./components/HomePage";
import ProductScreen from "./components/ProductScreen";
import OrderScreen from "./components/CartScreen";
import CartScreen from "./components/CartScreen";
import TierInfo from "./components/TierInfo";
import NavBar from "./components/NavBar";

import PaymentForm from "./components/Payment";
import RewardPointsScreen from "./components/ProductDisplay";
import ProductsScreen from "./components/ProductScreen";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <ProductScreen/> */}
      {/* <CartScreen/> */}
      {/* <TierInfo/> */}
      <NavBar />
      {/* <CartScreen /> */}
      <RewardPointsScreen/>

      {/* <Flex h="100vh" w="100vw" align={"center"} justify="center">
        <Stack >
        <PaymentForm/>

        </Stack>
      </Flex> */}
      {/* <RewardPointsScreen/> */}
    </div>
  );
}

export default App;
