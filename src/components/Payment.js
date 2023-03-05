import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    // Here you can add your logic to process the payment

    // If the payment is successful
    setSuccessMessage("Payment Successful!");

    // If there is an error processing the payment
    setIsError(true);

    setIsSubmitting(false);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="6" m="4">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl id="card-number" isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="tel"
              placeholder="xxxx xxxx xxxx xxxx"
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
            />
          </FormControl>
          <FormControl id="expiry-date" isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
            />
          </FormControl>
          <FormControl id="cvv" isRequired>
            <FormLabel>CVV</FormLabel>
            <Input
              type="tel"
              placeholder="xxx"
              value={cvv}
              onChange={(event) => setCvv(event.target.value)}
            />
          </FormControl>
          {isError && (
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>
                There was an error processing your payment. Please try again.
              </AlertDescription>
            </Alert>
          )}
          {successMessage && (
            <Alert status="success">
              <AlertIcon />
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            loadingText="Processing Payment"
          >
            Pay Now
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
