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
} from "@chakra-ui/react";
import { getLoyalityTiers, getProducts } from "../services/APIService";
import DashboardCards from "./DashboardCards";
import { CustomerContext } from "../context/customer-context";

export default function RewardPointsScreen() {
  const { customerLoyalityData } = useContext(CustomerContext);

  const [rewardPoints, setRewardPoints] = useState(2000);
  const [loyaltyTiers, setLoyaltyTiers] = useState([]);

  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CustomerContext);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log("RESPONSE", response);
        setProducts(response.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getLoyalityTiers()
      .then((response) => {
        console.log("RESPONSE", response);
        setLoyaltyTiers(response.loyality_tiers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePurchase = (product) => {
    addToCart(product);
  };

  const bg = useColorModeValue("#f3f0ec");
  const textColor = useColorModeValue("gray.800", "gray.200");

  if (products === []) {
    return (
      <Flex align={"center"} justify="center">
        <Stack>
          <Spinner />
        </Stack>
      </Flex>
    );
  }

  function getUpdatedPrice(price) {
    return (price - (customerLoyalityData?.loyality_points * 0.005)).toFixed(2);
  }

  return (
    <Box bg={bg} p={4}>
      <DashboardCards
        rewardPoints={customerLoyalityData?.loyality_points || 0}
        amountSpent={customerLoyalityData?.customer_spendings || 0}
      />

      <Flex align={"center"} justify="center">
        <Box mt={8} maxWidth="100vw">
          <Heading size="lg" mb={4}>
            Products to Purchase
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            {products.map((product) => (
              <Box
                key={product.id}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow={"sm"}
                w="sm"
              >
                <Image
                  borderTopRadius={"lg"}
                  src={product.image}
                  alt={product.name}
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
                    {product.title}
                  </Text>
                </Flex>

                <Divider></Divider>
                <Flex justify={"space-between"}>
                  <Flex w="50%" align={"center"} justify="center">
                    <Text
                      fontSize="17"
                      fontWeight="600"
                      color={"red.500"}
                      textAlign="right"
                      w="35%"
                      py="10px"
                      textDecoration="line-through"
                      
                    >
                      £{product.price}
                    </Text>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color={textColor}
                      // textAlign="center"
                      // w="50%"
                      pl="10px"
                      py="10px"
                    >
                      £{getUpdatedPrice(product.price)}
                    </Text>
                  </Flex>

                  <Text
                    height={"initial"}
                    bg={"#F06B02"}
                    _hover={{
                      bg: "#F08C30",
                      transition: "background-color 0.2s ease-in-out",
                    }}
                    onClick={() => handlePurchase(product)}
                    w="50%"
                    border="1px solid white"
                    cursor={"pointer"}
                    textAlign="center"
                    py="10px"
                    textColor={"white"}
                  >
                    Add to Cart
                  </Text>

                  
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
    //     </Box>
    // </Box>
  );
}
