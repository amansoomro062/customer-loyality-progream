import React, { useState, createContext, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCustomerDetails,
  getCustomerLoyality,
  getLoyalityTiersByCustomer,
} from "./../services/APIService.js";
import { useToast } from "@chakra-ui/react";

const initialValues = {
  email: undefined,
  customerId: undefined,
};
const CustomerContext = createContext(initialValues);

const Customer = (props) => {
  const [authData, setAuthData] = useState(initialValues);
  const toast = useToast();
  const [cart, setCart] = useState([]);

  const [customerLoyalityData, setCustomerLoyalityData] = useState({
    customer_spendings: 0,
    loyality_points: 0,
  });

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function addToCart(product) {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      updateCartQuantity(product.id, item.quantity + 1);
      toast({
        title: "Cart Updated",
        description: "Item added to cart",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast({
        title: "Cart Updated",
        description: "Item added to cart",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  function updateCartQuantity(id, quantity) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(newCart);
  }
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    creditLimit: 0,
    currentAccount: 0,
    savings: 0,
    missedPayments: 0,
    creditSpent: 0,
  });

  const [loading, setLoading] = useState(false);

  const [loyalityTiers, setLoyalityTiers] = useState([]);

  async function signout() {
    try {
      setAuthData(initialValues);
    } catch (error) {
      console.log("error signing out", error);
    }
  }

  async function signin(email) {
    try {
      setLoading(true);
      getCustomerDetails(email)
        .then((res) => {
          setAuthData({
            email: email,
            customerId: res.customers[0].id,
          });

          setCustomerData({
            creditLimit: res.customers[0].credit_limit,
            currentAccount: res.customers[0].current_account,
            savings: res.customers[0].savings,
            creditSpent: res.customers[0].credit_spent,
          });

          // GET CUSTOMER LOYALITY POINTS

          getCustomerLoyality(res?.customers[0]?.id)
            .then((response) => {
              console.log(
                "these are the details for customer Loyality",
                response?.customer_loyality?.[0]
              );

              setCustomerLoyalityData({
                customer_spendings:
                  response?.customer_loyality?.[0]?.customer_spendings,
                loyality_points:
                  response?.customer_loyality?.[0]?.loyality_points,
              });

              getLoyalityTiersByCustomer(
                response?.customer_loyality?.[0]?.customer_spendings
              )
                .then((response) => {
                  console.log(
                    "these are the loyality tiers",
                    response?.loyality_tiers?.[0]
                  );

                  let i = response?.loyality_tiers?.[0];

                  setLoyalityTiers({
                    id: i.id,
                    name: i.name,
                    range_max: i.range_max,
                    range_min: i.range_min,
                    points_multiplier: i.points_multiplier,
                  });
                })
                .catch((err) => {
                  console.log("Something went wrong", err);
                  alert("Please try again - getLoyalityTiersByCustomer");
                  setLoading(false);
                });

              navigate("/");
            })
            .catch((err) => {
              console.log("Something went wrong", err);
              alert("Please try again - getCustomerLoyality");
              setLoading(false);
            });

          // END OF GET CUSTOMER LOYALITY POINTS
          // navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
          alert("Please try again - getCustomerDetails");
          setLoading(false);
        });

      return;
      // setAuthData({ email: email, customerId: getCustomerId(email) });
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  async function refetch() {
    try {
      setLoading(true);
      getCustomerDetails(authData?.email)
        .then((res) => {
          setAuthData({
            email: authData?.email,
            customerId: res.customers[0].id,
          });

          setCustomerData({
            creditLimit: res.customers[0].credit_limit,
            currentAccount: res.customers[0].current_account,
            savings: res.customers[0].savings,
            creditSpent: res.customers[0].credit_spent,
          });

          // GET CUSTOMER LOYALITY POINTS

          getCustomerLoyality(res?.customers[0]?.id)
            .then((response) => {
              console.log(
                "these are the details for customer Loyality",
                response?.customer_loyality?.[0]
              );

              setCustomerLoyalityData({
                customer_spendings:
                  response?.customer_loyality?.[0]?.customer_spendings,
                loyality_points:
                  response?.customer_loyality?.[0]?.loyality_points,
              });

              getLoyalityTiersByCustomer(
                response?.customer_loyality?.[0]?.customer_spendings
              )
                .then((response) => {
                  console.log(
                    "these are the loyality tiers",
                    response?.loyality_tiers?.[0]
                  );

                  let i = response?.loyality_tiers?.[0];

                  setLoyalityTiers({
                    id: i.id,
                    name: i.name,
                    range_max: i.range_max,
                    range_min: i.range_min,
                    points_multiplier: i.points_multiplier,
                  });
                })
                .catch((err) => {
                  console.log("Something went wrong", err);
                  alert("Problem with Loyality Tiers");
                  setLoading(false);
                });
            })
            .catch((err) => {
              console.log("Something went wrong", err);
              alert("Problem with getCustomerLoyality");
              setLoading(false);
            });

          // END OF GET CUSTOMER LOYALITY POINTS
          // navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err);
          alert("Problem with getCustomerDetails");
          setLoading(false);
        });

      return;
      // setAuthData({ email: email, customerId: getCustomerId(email) });
    } catch (error) {
      console.log("error refreshing", error);
    }
  }

  useEffect(() => {
    if (!authData.email && !authData.customerId) {
      navigate("/login");
    }
  }, [authData]);

  return (
    <CustomerContext.Provider
      value={{
        authData,
        signin,
        loading,
        customerData,
        signout,
        addToCart,
        cart,
        removeFromCart,
        updateCartQuantity,
        customerLoyalityData,
        loyalityTiers,
        refetch,
        setCart
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

export { Customer, CustomerContext };
