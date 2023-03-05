import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";


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