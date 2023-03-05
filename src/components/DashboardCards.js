import { Flex, Box, Text } from "@chakra-ui/react";

const DashboardCards = ({ rewardPoints, remainingSpend }) => {
  const cardBg = "white";
  const cardBorderRadius = "md";
  const cardBoxShadow = "md";
  const cardPadding = 6;
  const textColor = "gray.800";
  const labelTextColor = "gray.500";
  const valueTextColor = "gray.900";
  const valueFontSize = "2xl";

  return (
    <Flex align="center" justify={"center"}>
      <Flex
        direction="column"
        align="center"
        bg={"white"}
        px={"30px"}
        pb={"10px"}
        borderRadius={"md"}
        boxShadow={"sm"}
        mr={"10px"}
        w={72}
      >
        <Box p={4}>
          <Text color={"grey"} fontSize={"14px"} textTransform={"uppercase"}>
            Loyalty Points
          </Text>
          <Text fontSize="50px" color={textColor} fontWeight={"bold"}>
            {rewardPoints}{" "}
            <Text as="span" fontSize={"14"}>
              points
            </Text>
          </Text>
        </Box>
      </Flex>

      <Flex
        direction="column"
        align="center"
        bg={"white"}
        px={"30px"}
        pb={"10px"}
        borderRadius={"md"}
        boxShadow={"sm"}
        mr={"10px"}
        w={72}
      >
        <Box p={4}>
          <Text color={"grey"} fontSize={"14px"} textTransform={"uppercase"}>
            Tier Level
          </Text>
          <Text fontSize="50px" color={textColor} fontWeight={"bold"}>
            Silver
          </Text>
        </Box>
      </Flex>

      <Flex
        direction="column"
        align="center"
        bg={"white"}
        px={"30px"}
        pb={"10px"}
        borderRadius={"md"}
        boxShadow={"sm"}
        w={72}
      >
        <Box p={4}>
          <Text color={"grey"} fontSize={"14px"} textTransform={"uppercase"}>
            Spend to Next Tier
          </Text>
          <Text fontSize="50px" color={textColor} fontWeight={"bold"}>
            £50{" "}
            <Text as="span" fontSize={"14"}>
              more
            </Text>
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardCards;
