import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of product 1',
    image: 'https://via.placeholder.com/150',
    price: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of product 2',
    image: 'https://via.placeholder.com/150',
    price: 20,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of product 3',
    image: 'https://via.placeholder.com/150',
    price: 30,
  },
];

const ProductsScreen = () => {
  return (
    <Box p={10}>
      <Heading as="h1" size="xl" mb={5}>
        Products
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box boxShadow="base" p={5} rounded="md">
              <Image src={product.image} mb={5} />
              <Heading as="h2" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text mb={2}>{product.description}</Text>
              <Text fontWeight="bold" mb={2}>
                ${product.price}
              </Text>
              <Button colorScheme="teal" size="sm">
                Add to cart
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsScreen;
