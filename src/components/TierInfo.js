import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function TierInfo() {
  return (
    <Box bg="white" py={{ base: "24", sm: "32" }}>
      <Box mx="auto" maxW="7xl" px={{ base: "6", lg: "8" }}>
        <Box
          mx="auto"
          maxW={{ base: "2xl", sm: "full" }}
          textAlign={{ sm: "center" }}
        >
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            tracking="tight"
            color="gray.900"
            mb="6"
            textAlign={{ base: "center", sm: "left" }}
          >
            Simple no-tricks pricing
          </Heading>
          <Text
            fontSize="lg"
            lineHeight="8"
            color="gray.600"
            mb={{ base: "10", sm: "0" }}
          >
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </Text>
        </Box>
        <Flex
          mx="auto"
          mt="16"
          maxW={{ base: "2xl", lg: "none" }}
          rounded={{ base: "none", lg: "3xl" }}
          borderWidth={{ base: "0", lg: "1px" }}
          borderColor="gray.200"
          flexDirection={{ base: "column", lg: "row" }}
          overflow="hidden"
        >
          <Box
            mt={{ base: "-2", lg: "0" }}
            p={{ base: "2", lg: "0" }}
            flex={{ base: "none", lg: "none" }}
            maxW={{ lg: "md" }}
            flexGrow={{ lg: "0" }}
          >
            <Box
              rounded="2xl"
              bg="gray.50"
              py="10"
              textAlign="center"
              borderWidth="1px"
              borderStyle="inset"
              borderColor="gray.900/5"
              display={{ base: "none", lg: "flex" }}
              flexDirection="column"
              justifyContent="center"
              py={{ lg: "16" }}
            >
              <Box mx="auto" maxW="xs" px="8">
                <Text fontSize="base" fontWeight="semibold" color="gray.600">
                  Pay once, own it forever
                </Text>
                <Flex
                  alignItems="baseline"
                  justifyContent="center"
                  mt="6"
                  mb="10"
                >
                  <Text
                    fontSize="5xl"
                    fontWeight="bold"
                    tracking="tight"
                    color="gray.900"
                  >
                    $349
                  </Text>
                  <Text
                    fontSize="sm"
                    fontWeight="semibold"
                    lineHeight="6"
                    color="gray.600"
                    ml="2"
                  >
                    USD
                  </Text>
                </Flex>
                <Box>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                </Box>
                <Text fontSize="xs" lineHeight="5" color="gray.600" mt="6">
                  Invoices and receipts available for easy company reimbursement
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
// import { useState } from "react";
// import {
//     Box,
//     Button,
//     Heading,
//     Grid,
//     GridItem,
//     Stack,
//     Text,
//     Badge,
//     Icon,
// } from "@chakra-ui/react";
// import { FaMedal } from "react-icons/fa";

// function TierInfo() {
//     const [points, setPoints] = useState(500);
//     const [tier, setTier] = useState("Gold");

//     const handlePointsUpdate = (newPoints) => {
//         let newTier;
//         if (newPoints < 1000) {
//             newTier = "Bronze";
//         } else if (newPoints < 2500) {
//             newTier = "Silver";
//         } else if (newPoints < 5000) {
//             newTier = "Gold";
//         } else {
//             newTier = "Platinum";
//         }
//         setPoints(newPoints);
//         setTier(newTier);
//     };

//     const Rewards = () => {
//         return (
//             <Box mt="8" bg="white" borderRadius="md" boxShadow="md" p="4">
//                 <Heading as="h2" size="lg" mb="4">
//                     Rewards Available
//                 </Heading>
//                 <Grid templateColumns="repeat(2, 1fr)" gap={6}>
//                     <GridItem colSpan={2}>
//                         <Box mb="4">
//                             <Text fontWeight="bold" mb="2">
//                                 Bronze Rewards
//                             </Text>
//                             <Stack spacing={1}>
//                                 <Badge colorScheme="green">10% off coupon</Badge>
//                                 <Badge colorScheme="blue">Free shipping</Badge>
//                             </Stack>
//                         </Box>
//                         <Box mb="4">
//                             <Text fontWeight="bold" mb="2">
//                                 Silver Rewards
//                             </Text>
//                             <Stack spacing={1}>
//                                 <Badge colorScheme="purple">15% off coupon</Badge>
//                                 <Badge colorScheme="orange">Early access to sales</Badge>
//                             </Stack>
//                         </Box>
//                     </GridItem>
//                     <GridItem colSpan={2}>
//                         <Box mb="4">
//                             <Text fontWeight="bold" mb="2">
//                                 Gold Rewards
//                             </Text>
//                             <Stack spacing={1}>
//                                 <Badge colorScheme="red">Personal shopper</Badge>
//                                 <Badge colorScheme="green">20% off coupon</Badge>
//                             </Stack>
//                         </Box>
//                         <Box mb="4">
//                             <Text fontWeight="bold" mb="2">
//                                 Platinum Rewards
//                             </Text>
//                             <Stack spacing={1}>
//                                 <Badge colorScheme="blue">Free gift</Badge>
//                                 <Badge colorScheme="purple">25% off coupon</Badge>
//                             </Stack>
//                         </Box>
//                     </GridItem>
//                 </Grid>
//             </Box>
//         );
//     };

//     return (
//         <Box p="4">
//             <Heading as="h1" size="2xl" mb="4">
//                 My Rewards
//             </Heading>
//             <Box
//                 p="4"
//                 bg="white"
//                 borderRadius="md"
//                 boxShadow="md"
//                 display="flex"
//                 alignItems="center"
//             >
//                 <Icon as={FaMedal} boxSize="16" color="yellow.400" mr="4" />
//                 <Box>
//                     <Text fontSize="xl" fontWeight="bold" mb="2">
//                         Tier: {tier}
//                     </Text>
//                     <Text fontSize="md">
//                         You currently have {points} points. Earn more points to reach the
//                         next tier.
//                     </Text>
//                     <Box mt="4">
//                         <Text fontSize
//                             ="md" fontWeight="bold">
//                             Add Points
//                         </Text>
//                         <Box display="flex" alignItems="center" mt="2">
//                             <Button size="sm" onClick={() => handlePointsUpdate(points - 100)}>
//                                 -100
//                             </Button>
//                             <Text fontSize="xl" mx="4">
//                                 {points}
//                             </Text>
//                             <Button size="sm" onClick={() => handlePointsUpdate(points + 100)}>
//                                 +100
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Box>
//             </Box>
//             <Rewards />
//         </Box>
//     );
// }

// export default TierInfo;
