import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Grid, GridItem,
  Text,
} from "@chakra-ui/react";
import { getLoyalityTiers } from "../services/APIService";
import NavBar from "./NavBar";



export default function TierInfo() {
  const [loyaltyTiers, setLoyaltyTiers] = useState([])

  useEffect(() => {
    getLoyalityTiers().then(response => {
      setLoyaltyTiers(response)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  if (!loyaltyTiers || loyaltyTiers === []) {
    return (
      <Flex>
        <Text>Loading</Text>
      </Flex>
    )
  }


  return (
    <>
    <NavBar />
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
        <Grid
          templateColumns="repeat(5, 1fr)" // 3 columns in this example
          mx="auto"
          mt="16"
          maxW={{ base: "2xl", lg: "none" }}
          rounded={{ base: "none", lg: "3xl" }}
          borderWidth={{ base: "0", lg: "1px" }}
          borderColor="gray.200"
          overflow="hidden"
          gap={2}
        >
          {console.log("THIS IS ME", loyaltyTiers)}
          {loyaltyTiers?.loyality_tiers?.map((loyaltyTier) => (
            <GridItem colSpan={1} rowSpan={1} >
              <Box
                mt={{ base: "-2", lg: "0" }}
                p={{ base: "2", lg: "0" }}
                
                
              >
                <Box
                  rounded="2xl"
                  bg="gray.50"
                  py="10"
                  textAlign="center"
                  borderWidth="1px"
                  // borderStyle="inset"
                  borderColor="gray.900/5"
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  justifyContent="center"
                  h="300px"
                // py={{ "lg": "16" }}
                >
                  <Box mx="auto" maxW="xs" px="8">
                    
                    <Flex
                      alignItems="baseline"
                      justifyContent="center"
                      mt="6"
                      mb="10"
                    >
                      <Text
                        fontSize="3xl"
                        fontWeight="bold"
                        tracking="tight"
                        color="gray.900"
                      >
                        {loyaltyTier.name}
                      </Text>
                      
                    </Flex>
                    <Box>
                    
                    <Text fontSize="base" fontWeight="semibold" color="gray.600">
                     £{loyaltyTier.range_min} - {loyaltyTier.range_max}
                    </Text>
                    
                    </Box>
                    {/* <Text fontSize="xs" lineHeight="5" color="gray.600" mt="6">
                      Invoices and receipts available for easy company reimbursement
                    </Text> */}
                  </Box>
                </Box>
              </Box>

              {/* Content for the first two cells */}
            </GridItem>
          ))}




        </Grid>





      </Box>
    </Box>
    </>
  );
}