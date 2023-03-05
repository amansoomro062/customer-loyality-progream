import React, { useContext } from 'react';
import {
  Box,
  Text,
  Heading,
  Table,
  Thead,
  Flex,
  Stack,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Icon,
  Image,
  Badge,
  CloseButton,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import NavBar from './NavBar';
import { CustomerContext } from '../context/customer-context';
import { useNavigate } from 'react-router-dom';

function CartScreen() {

  const { removeFromCart, cart, updateCartQuantity } = useContext(CustomerContext);

  function handleQuantityChange(id, quantity) {
    updateCartQuantity(id, quantity);
  }

  function handleRemoveFromCart(id) {
    removeFromCart(id);
  }

  const navigate = useNavigate()

  function navigateTo(url) {
    navigate(url)
  }


  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal.toFixed(2);

  return (
    <>
      <NavBar />
      <Stack p="5vw">
        <Heading>Shopping Cart</Heading>

        <Flex minHeight="100vh" justify="center">
          <Stack w="100%">
            <Box p={4}>
              {cart && cart.length === 0 ? (
                <Text>There are no items in your cart.</Text>
              ) : (
                <>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Product</Th>
                        <Th>Quantity</Th>
                        <Th isNumeric textAlign="right">Price</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {cart?.map((item) => (
                        <Tr key={item.id}>
                          <Td>
                            <Box display="flex" alignItems="center">
                              <Image src={item.image} alt={item.title} boxSize="50px" mr={4} />
                              <Box>
                                <Text fontWeight="bold">{item.title}</Text>
                              </Box>
                            </Box>
                          </Td>
                          <Td>
                            <Box display="flex" alignItems="center">
                              <Button
                                variant="link"
                                colorScheme="gray"
                                size="sm"
                                mr={2}
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </Button>
                              <Text fontWeight="bold">{item.quantity}</Text>
                              <Button
                                variant="link"
                                colorScheme="gray"
                                size="sm"
                                ml={2}
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </Box>
                          </Td>
                          <Td isNumeric>£{(item.price * item.quantity).toFixed(2)}</Td>
                          <Td>
                            <CloseButton
                              variant="unstyled"
                              colorScheme="red"
                              size="sm"
                              ml={4}
                              mr={-2}
                              onClick={() => handleRemoveFromCart(item.id)}
                            />
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                  <Box mt={4} textAlign="right">
                    <Text fontSize="xl" fontWeight="bold">
                      Subtotal: £{total}
                    </Text>
                    <Button colorScheme="blue" mt={4} size="lg"
                      onClick={() => navigateTo('/payment')}
                    >
                      Checkout
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export default CartScreen;
