import { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import { CustomerContext } from "../context/customer-context";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin } = useContext(CustomerContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    signin(email);
  };

  return (
    <Flex align={"center"} justify={"center"} minH="100vh">
      <Box
        maxW="md"
        mx="auto"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p={8}
        rounded="md"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Login
        </Heading>
        <Text mb={8} textAlign="center">
          Welcome back! Please log in to your account to continue earning
          points.
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
    </Flex>
  );
}

export default CustomerLogin;
