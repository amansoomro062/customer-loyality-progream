import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={8}
      rounded="md"
    >
      <Heading as="h2" size="xl" mb={6}>
        Customer Login
      </Heading>
      <Text mb={8}>
        Welcome back! Please log in to your account to continue shopping.
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            size="md"
          />
        </FormControl>
        <FormControl id="password" mb={8}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="md"
          />
        </FormControl>
        <Button type="submit" colorScheme="orange" mb={8} size="lg" w="100%">
          Log In
        </Button>
      </form>
    </Box>
  );
}

export default CustomerLogin;
