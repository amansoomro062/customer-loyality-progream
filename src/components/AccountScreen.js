import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Spacer,
  Avatar,
  Badge,
  Divider,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./NavBar";

const CustomerAccountPage = () => {
  const bg = useColorModeValue("#f3f0ec");
  return (
    <>
      <NavBar />
      <Flex align={"center"} justify="center" bg={bg} minH={"100vh"}>
        <Box p={4} w="60vw">
          <Flex alignItems="center" mb={4}>
            <Avatar
              size="2xl"
              name="John Doe"
              src="https://i.pravatar.cc/150?img=5"
              mr={4}
            />
            <Box>
              <Heading as="h2" size="xl">
                John Doe
              </Heading>
              <Text fontSize="xl">johndoe@example.com</Text>
              <Badge
                variant="solid"
                colorScheme="purple"
                mt={2}
                fontSize="sm"
                fontWeight="bold"
                py={1}
                px={2}
                borderRadius="full"
              >
                Premium
              </Badge>
            </Box>
            <Spacer />
          </Flex>
          <Divider my={4} />
          <Tabs isFitted variant="enclosed">
            <TabList mb={4}>
              <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                _hover={{ color: "white", bg: "purple.500" }}
                mr={4}
              >
                My Orders
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                _hover={{ color: "white", bg: "purple.500" }}
                mr={4}
              >
                My Account
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "purple.500" }}
                _hover={{ color: "white", bg: "purple.500" }}
              >
                Settings
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack spacing={4}>
                  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                    <Flex alignItems="center">
                      <Text fontWeight="bold" fontSize="lg">
                        Order #12345
                      </Text>
                      <Spacer />
                      <Text fontSize="lg" color="gray.500">
                        $99.99
                      </Text>
                    </Flex>
                    <Text color="gray.500">Placed on January 1, 2023</Text>
                  </Box>
                  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                    <Flex alignItems="center">
                      <Text fontWeight="bold" fontSize="lg">
                        Order #23456
                      </Text>
                      <Spacer />
                      <Text fontSize="lg" color="gray.500">
                        $149.99
                      </Text>
                    </Flex>
                    <Text color="gray.500">Placed on February 1, 2023</Text>
                  </Box>
                  <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                    <Flex alignItems="center">
                      <Text fontWeight="bold" fontSize="lg">
                        Order #34567
                      </Text>
                      <Spacer />
                      <Text fontSize="lg" color="gray.500">
                        $199.99
                      </Text>
                    </Flex>
                    <Text color="gray.500">Placed on March 1, 2023</Text>
                  </Box>
                </Stack>
              </TabPanel>
              <TabPanel>
                <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                  <Heading as="h3" size="lg" mb={4}>
                    Personal Information
                  </Heading>
                  <Stack spacing={4}>
                    <Box>
                      <Text fontWeight="bold">Name:</Text>
                      <Text>John Doe</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Email:</Text>
                      <Text>johndoe@example.com</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Phone:</Text>
                      <Text>555-1234</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Address:</Text>
                      <Text>123 Main St, Anytown USA</Text>
                    </Box>
                  </Stack>
                </Box>
                <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                  <Heading as="h3" size="lg" mb={4}>
                    Payment Information
                  </Heading>
                  <Stack spacing={4}>
                    <Box>
                      <Text fontWeight="bold">Credit Card:</Text>
                      <Text>**** **** **** 1234</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Expiration Date:</Text>
                      <Text>01/24</Text>
                    </Box>
                  </Stack>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                  <Heading as="h3" size="lg" mb={4}>
                    Account Settings
                  </Heading>
                  <Stack spacing={4}>
                    <Box>
                      <Text fontWeight="bold">Email Notifications:</Text>
                      <Text>On</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">SMS Notifications:</Text>
                      <Text>Off</Text>
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Push Notifications:</Text>
                      <Text>On</Text>
                    </Box>
                  </Stack>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default CustomerAccountPage;
