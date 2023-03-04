import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Badge,
} from "@chakra-ui/react";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const transactions = [
    { date: "01/01/2022", description: "Grocery Shopping", amount: "-$50.00" },
    { date: "02/01/2022", description: "Gas Station", amount: "-$20.00" },
    { date: "03/01/2022", description: "Online Shopping", amount: "-$100.00" },
  ];

  const upcomingTransactions = [
    { date: "01/04/2022", description: "Rent", amount: "-$1,000.00" },
    { date: "02/04/2022", description: "Electricity Bill", amount: "-$100.00" },
  ];

  const missedPayments = [
    {
      date: "01/03/2022",
      description: "Credit Card Payment",
      amount: "-$500.00",
    },
    {
      date: "01/02/2022",
      description: "Mortgage Payment",
      amount: "-$1,000.00",
    },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Box bg="blue.500" color="white" py={4} px={8}>
        <Heading as="h1" size="xl">
          My Accounts
        </Heading>
      </Box>
      <Box px={8} py={4}>
        <SimpleGrid columns={[1, null, 2]} spacing={4}>
          <Stat
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg={activeTab === 0 ? "blue.50" : "white"}
            onClick={() => handleTabChange(0)}
          >
            <StatLabel>Current Account</StatLabel>
            <StatNumber>$5,000</StatNumber>
            <Text mt={2} fontSize="sm">
              Primary Insight
            </Text>
          </Stat>
          <Stat
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg={activeTab === 1 ? "blue.50" : "white"}
            onClick={() => handleTabChange(1)}
          >
            <StatLabel>Savings Account</StatLabel>
            <StatNumber>$10,000</StatNumber>
            <Text mt={2} fontSize="sm">
              Secondary Insight
            </Text>
          </Stat>
          <Stat
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg={activeTab === 2 ? "blue.50" : "white"}
            onClick={() => handleTabChange(2)}
          >
            <StatLabel>Credit Balance</StatLabel>
            <StatNumber>$1,000</StatNumber>
            <Text mt={2} fontSize="sm">
              Third Insight
            </Text>
          </Stat>
        </SimpleGrid>
      </Box>
      <Box px={8} py={4}>
        <Tabs isFitted colorScheme="blue">
          <TabList mb={4}>
            <Tab>List of Transactions</Tab>
            <Tab>List of Upcoming Payments</Tab>
            <Tab>List of Missed Payments</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Description</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactions.map((transaction, index) => (
                    <Tr key={index}>
                      <Td>{transaction.date}</Td>
                      <Td>{transaction.description}</Td>
                      <Td isNumeric>{transaction.amount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Description</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {upcomingTransactions.map((transaction, index) => (
                    <Tr key={index}>
                      <Td>{transaction.date}</Td>
                      <Td>{transaction.description}</Td>
                      <Td isNumeric>{transaction.amount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Description</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {missedPayments.map((payment, index) => (
                    <Tr key={index}>
                      <Td>{payment.date}</Td>
                      <Td>{payment.description}</Td>
                      <Td isNumeric>{payment.amount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default HomePage;
