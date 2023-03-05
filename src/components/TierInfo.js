import { useState } from "react";
import {
    Box,
    Button,
    Heading,
    Grid,
    GridItem,
    Stack,
    Text,
    Badge,
    Icon,
} from "@chakra-ui/react";
import { FaMedal } from "react-icons/fa";

function TierInfo() {
    const [points, setPoints] = useState(500);
    const [tier, setTier] = useState("Gold");

    const handlePointsUpdate = (newPoints) => {
        let newTier;
        if (newPoints < 1000) {
            newTier = "Bronze";
        } else if (newPoints < 2500) {
            newTier = "Silver";
        } else if (newPoints < 5000) {
            newTier = "Gold";
        } else {
            newTier = "Platinum";
        }
        setPoints(newPoints);
        setTier(newTier);
    };

    const Rewards = () => {
        return (
            <Box mt="8" bg="white" borderRadius="md" boxShadow="md" p="4">
                <Heading as="h2" size="lg" mb="4">
                    Rewards Available
                </Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <GridItem colSpan={2}>
                        <Box mb="4">
                            <Text fontWeight="bold" mb="2">
                                Bronze Rewards
                            </Text>
                            <Stack spacing={1}>
                                <Badge colorScheme="green">10% off coupon</Badge>
                                <Badge colorScheme="blue">Free shipping</Badge>
                            </Stack>
                        </Box>
                        <Box mb="4">
                            <Text fontWeight="bold" mb="2">
                                Silver Rewards
                            </Text>
                            <Stack spacing={1}>
                                <Badge colorScheme="purple">15% off coupon</Badge>
                                <Badge colorScheme="orange">Early access to sales</Badge>
                            </Stack>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Box mb="4">
                            <Text fontWeight="bold" mb="2">
                                Gold Rewards
                            </Text>
                            <Stack spacing={1}>
                                <Badge colorScheme="red">Personal shopper</Badge>
                                <Badge colorScheme="green">20% off coupon</Badge>
                            </Stack>
                        </Box>
                        <Box mb="4">
                            <Text fontWeight="bold" mb="2">
                                Platinum Rewards
                            </Text>
                            <Stack spacing={1}>
                                <Badge colorScheme="blue">Free gift</Badge>
                                <Badge colorScheme="purple">25% off coupon</Badge>
                            </Stack>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        );
    };

    return (
        <Box p="4">
            <Heading as="h1" size="2xl" mb="4">
                My Rewards
            </Heading>
            <Box
                p="4"
                bg="white"
                borderRadius="md"
                boxShadow="md"
                display="flex"
                alignItems="center"
            >
                <Icon as={FaMedal} boxSize="16" color="yellow.400" mr="4" />
                <Box>
                    <Text fontSize="xl" fontWeight="bold" mb="2">
                        Tier: {tier}
                    </Text>
                    <Text fontSize="md">
                        You currently have {points} points. Earn more points to reach the
                        next tier.
                    </Text>
                    <Box mt="4">
                        <Text fontSize
                            ="md" fontWeight="bold">
                            Add Points
                        </Text>
                        <Box display="flex" alignItems="center" mt="2">
                            <Button size="sm" onClick={() => handlePointsUpdate(points - 100)}>
                                -100
                            </Button>
                            <Text fontSize="xl" mx="4">
                                {points}
                            </Text>
                            <Button size="sm" onClick={() => handlePointsUpdate(points + 100)}>
                                +100
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Rewards />
        </Box>
    );
}

export default TierInfo;
