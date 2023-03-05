import React from 'react';
import {
  Box,
  Text,
  Heading,
  Table,
  Thead,
  Flex, Stack,
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

const orders = [
  {
    id: 1,
    product: 'T-Shirt',
    quantity: 2,
    price: 24.99,
    image: 'https://source.unsplash.com/400x400/?tshirt',
  },
  {
    id: 2,
    product: 'Jeans',
    quantity: 1,
    price: 49.99,
    image: 'https://source.unsplash.com/400x400/?jeans',
  },
  {
    id: 3,
    product: 'Sneakers',
    quantity: 1,
    price: 79.99,
    image: 'https://source.unsplash.com/400x400/?sneakers',
  },
];

function CartScreen() {
  const total = orders.reduce((acc, order) => acc + order.quantity * order.price, 0);

  return (
    <Stack p="5vw">
      <Heading>Shopping Cart</Heading>

      <Flex  minHeight="100vh" justify={"center"}>

        <Stack w="100%">
          <Box p={4}>

            {orders.length === 0 ? (
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
                    {orders.map((order) => (
                      <Tr key={order.id}>
                        <Td>
                          <Box display="flex" alignItems="center">
                            <Image src={order.image} alt={order.product} boxSize="50px" mr={4} />
                            <Box>
                              <Text fontWeight="bold">{order.product}</Text>
                              <Badge colorScheme="green" fontSize="sm">
                                In Stock
                              </Badge>
                            </Box>
                          </Box>
                        </Td>
                        <Td>
                          <Box display="flex" alignItems="center">
                            <Button variant="link" colorScheme="gray" size="sm" mr={2}>
                              -
                            </Button>
                            <Text fontWeight="bold">{order.quantity}</Text>
                            <Button variant="link" colorScheme="gray" size="sm" ml={2}>
                              +
                            </Button>
                          </Box>
                        </Td>
                        <Td isNumeric>£{order.price.toFixed(2)}</Td>
                        <Td>
                          <CloseButton variant="unstyled" colorScheme="red" size="sm" ml={4} mr={-2} />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                <Box mt={4} textAlign="right">
                  <Text fontSize="xl" fontWeight="bold">
                    Total: £{total.toFixed(2)}
                  </Text>
                  <Button colorScheme="blue" mt={4} size="lg">
                    Checkout
                  </Button>
                </Box>
              </>
            )}
          </Box>

        </Stack>
      </Flex>

    </Stack>

  );
}

export default CartScreen;
