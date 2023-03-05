import { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Button,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../context/customer-context";
import {
  addCustomerOrder,
  addCustomerPayment,
  addOrderProducts,
} from "../services/APIService";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("1234");
  const [expiryDate, setExpiryDate] = useState("1234");
  const [cvv, setCvv] = useState("123");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { cart, authData, refetch, loyalityTiers, setCart, customerData } =
    useContext(CustomerContext);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const toast = useToast();
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/");
  }

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(customerData?.savings)

    let i = 0;

    if(i > 1000 && i < 2500) {
      console.log("Bronze")
      i = 0.03
    } else if(i > 2500 && i < 6000) {
      console.log("Silver")
      i = 0.06
    } else if(i > 6000) {
      console.log("Gold")
      i = 0.11
    }

    setLoading(true);
    console.log({
      customerId: authData.customerId,
      products: cart,
      orderTotal: totalPrice,
    });

    try {
      // Add order and get order ID
      const orderResponse = await addCustomerOrder(
        authData.customerId,
        totalPrice
      );
      const orderId = orderResponse?.insert_customer_orders?.returning[0]?.id;

      if (!orderId) {
        alert("Something went wrong. Please try again later.");
        return;
      }

      // Add order products
      for (const cartItem of cart) {
        await addOrderProducts(orderId, cartItem.id, cartItem.quantity);
      }

      // Add customer payment
      addCustomerPayment(
        totalPrice,
        authData.customerId,
        loyalityTiers.points_multiplier || 0,
        i
      )
        .then((response) => {
          console.log("This is the payment added", response);

          refetch();
          setLoading(false);
          navigateTo();

          setIsSubmitting(false);

          toast({
            title: "Order placed successfully.",
            description: "Your order has been placed successfully.",
            status: "success",
            duration: 2000,
          });
        })
        .catch((err) => {
          console.log(err);

          refetch();
          setLoading(false);
          navigateTo();

          setIsSubmitting(false);
          setCart([]);

          toast({
            title: "Unable to place order.",
            description:
              "Something went wrong with the server! Please try again later.",
            status: "error",
            duration: 2000,
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   console.log({
  //     customerId: authData.customerId,
  //     products: cart,
  //     orderTotal: totalPrice,
  //   });

  //   addCustomerOrder(authData.customerId, totalPrice)
  //     .then((response) => {
  //       console.log("This is the order added", response?.insert_customer_orders?.returning[0]?.id);

  //       let orderId = response?.insert_customer_orders?.returning[0]?.id;

  //       if(!orderId) {
  //         alert("Something went wrong. Please try again later.");
  //       } else {

  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   setIsSubmitting(true);

  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     // navigateTo();
  //   }, 2000);
  // };

  if (isSubmitting) {
    return (
      <Flex align={"center"} justify="center" h="100vh">
        <Stack>
          <Spinner />
        </Stack>
      </Flex>
    );
  }

  return (
    <Flex align="center" justify="center" height="100vh">
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

            <Button
              type="submit"
              colorScheme="blue"
              loadingText="Processing Payment"
              isLoading={loading}
            >
              Pay Now
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
}
