
import { useContext, useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Image,
  SimpleGrid,
  Center,
  Divider,
  Spinner,
  Grid,
   GridItem
} from "@chakra-ui/react";
import { getLoyalityTiers, getProducts } from "../services/APIService";
import DashboardCards from "./DashboardCards";
import { CustomerContext } from "../context/customer-context";
import NavBar from "./NavBar";



const OffersScreen = () => {

  const { loyalityOffers } = useContext(CustomerContext);

  function handlePurchase() {
    console.log("PURCHASED", loyalityOffers)
  }




 

  const bg = useColorModeValue("#f3f0ec");

  return (
    <>
    <NavBar />
    <Flex align={"center"} justify="center" bg={bg}>
        <Box mt={8} maxWidth="100vw">
          <Heading size="lg" mb={4}>
            Products to Purchase
          </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {loyalityOffers.map((offer, index) => (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          boxShadow={"sm"}
          w="sm"
          key={index}
        >
          <Image
            borderTopRadius={"lg"}
            src={offer?.loyality_offer?.image}
            alt={offer?.loyality_offer?.name}
          />
          <Divider></Divider>
          <Flex
            align={"center"}
            justify="center"
            px="10px"
            fontSize={"15px"}
            textAlign="center"
            minHeight={"50px"}
            bg={"white"}
          >
            <Text w="100%" size="md" textAlign="center" fontWeight="bold">
              {offer?.loyality_offer.title}
            </Text>
          </Flex>

          <Divider></Divider>
          <Flex justify={"space-between"}>
            
            <Text
              height={"initial"}
              bg={"#F06B02"}
              _hover={{
                bg: "#F08C30",
                transition: "background-color 0.2s ease-in-out",
              }}
              onClick={() => handlePurchase(offer)}
              w="100%"
              border="1px solid white"
              cursor={"pointer"}
              textAlign="center"
              py="10px"
              textColor={"white"}
            >
              See Offer
            </Text>


          </Flex>
        </Box>
      ))}
    </SimpleGrid>
    </Box>
    </Flex>

    
    </>
  );
};

export default OffersScreen;


