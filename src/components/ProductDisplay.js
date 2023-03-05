import { useEffect, useState } from "react";
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
    Spinner
} from "@chakra-ui/react";
import { getProducts } from "../services/APIService";

export default function RewardPointsScreen() {
    const [rewardPoints, setRewardPoints] = useState(2000);

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            console.log("RESPONSE", response)
            setProducts(response.products)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const handlePurchase = (productId, productPrice) => {
        if (rewardPoints >= productPrice) {
            setRewardPoints(rewardPoints - productPrice);
            // Here you can add your logic to process the purchase
            console.log(`Purchased product ${productId} for ${productPrice} points`);
        } else {
            console.log("Not enough reward points");
        }
    };

    const bg = useColorModeValue("#f3f0ec");
    const textColor = useColorModeValue("gray.800", "gray.200");

    if(products === []) {
        return (
            <Flex align={"center"} justify="center" >
                <Stack>
                    <Spinner />
                </Stack>

            </Flex>
        )
    }

    return (
        <Box bg={bg} p={4} >
            <Flex direction="column" align="center">
                <Box p={4}>
                    <Heading size="lg">My Reward Points</Heading>
                    <Text fontSize="xl" color={textColor}>
                        {rewardPoints} points
                    </Text>
                </Box>
                <Stack direction="row" spacing={4} align="center">
                    <Badge colorScheme="green">100 points = $1</Badge>
                    <Button colorScheme="green" size="sm">
                        Redeem Points
                    </Button>
                </Stack>
            </Flex>
            <Flex align={"center"} justify="center">
                <Box mt={8} maxWidth="100vw" >
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
                                <Image borderTopRadius={"lg"} src={product.image} alt={product.name} />
                                <Divider></Divider>
                                <Flex align={"center"} justify="center" px="10px" fontSize={"15px"} textAlign="center" minHeight={"50px"} bg={"white"}>
                                    <Text w="100%" size="md" textAlign="center" fontWeight="bold" >
                                        {product.title}
                                    </Text>
                                </Flex>


                                <Divider></Divider>
                                <Flex justify={"space-between"}  >
                                    <Text fontSize="xl" fontWeight="bold" color={textColor}
                                        textAlign="center"
                                        w="50%"
                                        py="10px"
                                    >
                                        £{product.price}
                                    </Text>
                                    <Text
                                        height={"initial"}
                                        bg={'#F06B02'}
                                        _hover={{
                                            bg: "#F08C30",
                                            transition: "background-color 0.2s ease-in-out",
                                        }}
                                        onClick={() => handlePurchase(product.id, product.price)}
                                        w="50%"
                                        border="1px solid white"
                                        cursor={"pointer"}
                                        textAlign="center"
                                        py="10px"
                                        textColor={"white"}
                                    >
                                        Add to Cart
                                    </Text>

                                    {/* <Button
                                        colorScheme="green"
                                        
                                        onClick={() => handlePurchase(product.id, product.price)}
                                    >
                                        Add to Cart
                                    </Button> */}
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
