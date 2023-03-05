import React from "react";

import axios from "axios";

export async function getCustomerDetails(email) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/getCustomerDetails", {
      email: email,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function addCustomerOrder(customerId, total) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/addCustomerOrder", {
      customerId: customerId,
      order_total_amount: total,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function addOrderProducts(orderId, productId, quantity) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/addOrderProducts", {
      orderId: orderId,
      productId: productId,
      quantity: quantity,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function addCustomerPayment(
  amount,
  customerId,
  multiplier,
  savings_multiplier
) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/addCustomerPayment", {
      amount: amount,
      customerId: customerId,
      type: "Shopping",
      type_of_payment: "ONTIME",
      multiplier: parseInt((multiplier + savings_multiplier) * amount),
      subtract: -amount,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getOffers() {
  let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getOffers")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getCustomerPayments(id) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/getCustomerPayments", {
      customerId: id,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getCustomerLoyality(id) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/getCustomerLoyality", {
      customerId: id,
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getCustomerFinancialTier() {
  let i = await axios
    .get(
      "https://better-mollusk-57.hasura.app/api/rest/getCustomerFinancialTier"
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getCustomerFinancialTierByCustomer(id) {
  let i = await axios
    .post(
      "https://better-mollusk-57.hasura.app/api/rest/getCustomerFinancialTierByCustomer",
      {
        customerId: id,
      }
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getLoyalityOffersEligibilty() {
  let i = await axios
    .get(
      "https://better-mollusk-57.hasura.app/api/rest/getLoyalityOffersEligibilty"
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getLoyalityOffersEligibilityByCustomer(id) {
  let i = await axios
    .post(
      "https://better-mollusk-57.hasura.app/api/rest/getLoyalityOffersEligibilityByCustomer",
      {
        customerId: id,
      }
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getLoyalityTiers() {
  let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getLoyalityTiers")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getLoyalityTierByCustomer(id) {
  let i = await axios
    .post(
      "https://better-mollusk-57.hasura.app/api/rest/getLoyalityTierByCustomer",
      {
        customerId: id,
      }
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getLoyalityTiersByCustomer(total_spent) {
  let i = await axios
    .post(
      "https://better-mollusk-57.hasura.app/api/rest/getLoyalityTiersByCustomer",
      {
        total_spent: total_spent,
      }
    )
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getProducts() {
  let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getProducts")
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}
