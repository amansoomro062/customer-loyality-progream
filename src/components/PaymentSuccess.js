import { Box, Text, Heading } from "@chakra-ui/react";

function PaymentSuccess(props) {
  const { orderNumber, paymentMethod, totalAmount } = props;

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="500px"
        height="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        boxShadow="lg"
        bg="white"
        padding="40px"
      >
        <Heading size="lg" mb="4" textAlign="center">
          Payment Successful!
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Thank you for your purchase.
        </Text>
        <Box mt="40px" bg="gray.100" p="6" borderRadius="md" textAlign="left">
          <Text fontWeight="bold" mb="4">
            Order details
          </Text>
          <Text>Order number: {orderNumber}</Text>
          <Text>Payment method: {paymentMethod}</Text>
          <Text>Total amount: ${totalAmount.toFixed(2)}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentSuccess;
