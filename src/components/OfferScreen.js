
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

const offers = [
  {
    id: 1,
    title: '50% off on all products',
    image: 'https://via.placeholder.com/150x150',
    color: 'teal.500',
  },
  {
    id: 2,
    title: 'Free shipping on orders over $50',
    image: 'https://via.placeholder.com/150x150',
    color: 'blue.500',
  },
  {
    id: 3,
    title: 'Buy one get one free on selected items',
    image: 'https://via.placeholder.com/150x150',
    color: 'purple.500',
  },
  {
    id: 4,
    title: '$10 off on orders over $100',
    image: 'https://via.placeholder.com/150x150',
    color: 'red.500',
  },
  {
    id: 5,
    title: '20% off on all beauty products',
    image: 'https://via.placeholder.com/150x150',
    color: 'pink.500',
  },
  {
    id: 6,
    title: '15% off on all fashion products',
    image: 'https://via.placeholder.com/150x150',
    color: 'orange.500',
  },
];

const OffersScreen = () => {
  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CustomerContext);
  const textColor = useColorModeValue("gray.800", "gray.200");

  function handlePurchase() {

  }


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
               

              >
                £{product.price}
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


