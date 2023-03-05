import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';

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
  return (
    <Box p={4}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Offers
      </Text>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
        {offers.map((offer) => (
          <GridItem key={offer.id}>
            <Box
              bg="white"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              transition="all 0.2s ease-in-out"
              _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'lg',
              }}
            >
              <Image
                src={offer.image}
                alt={offer.title}
                h="150px"
                w="100%"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontSize="xl" fontWeight="bold" mb={2} color={offer.color}>
                  {offer.title}
                </Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default OffersScreen;
