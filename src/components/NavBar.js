import {
    Box,
    Flex,
    Text,
    Link,
    Button,
    Spacer,
    IconButton,
    Badge,
    Image,
  } from "@chakra-ui/react";
  import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
  
  function NavBar() {

    const navigate = useNavigate()

    function navigateTo(url) {
      navigate(url)
    }
    return (
      <Box bg="white" shadow="md" py="2" px={{ base: "4", md: "10" }}>
        <Flex
          maxW="6xl"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box                 
              onClick={() => navigateTo('/')}
              cursor={"pointer"}
              >
            <Flex alignItems="center">
              <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sainsbury%27s_Logo.svg/2560px-Sainsbury%27s_Logo.svg.png" 
              alt="Sainsbury"  h={7} mr={2} />
              
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center" w="50vw" px="20px" justify={"space-evenly"}>
            <Box
                mr={{ base: "0", md: "4" }}
                _hover={{ "color": "#f06c01" }}
                cursor={"pointer"}
                onClick={() => navigateTo('/')}
              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Home
                </Text>
              </Box>

              <Box
                mr={{ base: "0", md: "4" }}
                _hover={{ "color": "#f06c01" }}
                cursor={"pointer"}
                onClick={() => navigateTo('/tiers')}

              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Tier Rewards
                </Text>
              </Box>
              <Box
                mr={{ base: "0", md: "4" }}
                _hover={{ "color": "#f06c01" }}
                cursor={"pointer"}
                onClick={() => navigateTo('/products')}

              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Products
                </Text>
              </Box>
              <Box
                mr={{ base: "0", md: "4" }}
                _hover={{ "color": "#f06c01" }}
                cursor={"pointer"}
                onClick={() => navigateTo('/offers')}

              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Offers
                </Text>
              </Box>
              <Box
                mr={{ base: "0", md: "4" }}
                _hover={{ "color": "#f06c01" }}
                cursor={"pointer"}
                onClick={() => navigateTo('/offers')}

              >
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  textAlign={{ base: "center", md: "left" }}
                >
                  Account
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center">
              <Box _hover={{ textDecoration: "none" }}
                onClick={() => navigateTo('/cart')}
              >
                <IconButton
                  icon={<FaShoppingCart />}
                  aria-label="cart"
                  variant="ghost"
                  size={{ base: "md", md: "lg" }}
                />

              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    );
  }
  
  export default NavBar;
  