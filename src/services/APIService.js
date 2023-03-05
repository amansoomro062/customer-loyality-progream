import React from "react";

import axios from "axios";

export async function getCustomerDetails(email) {
  let i = await axios
    .post("https://better-mollusk-57.hasura.app/api/rest/getCustomerDetails", { email: email })
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
      console.log("these are the details", res);
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
      console.log("these are the details", res);
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

export async function getCustomerFinancialTier(){
    let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getCustomerFinancialTier")
    .then((res) => {
      console.log("these are the details", res);
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
      .post("https://better-mollusk-57.hasura.app/api/rest/getCustomerFinancialTierByCustomer", {
        customerId: id,
      })
      .then((res) => {
        console.log("these are the details", res);
        return res?.data;
      })
      .catch((err) => {
        console.log("Something went wrong");
        return err;
      });
  
    return i;
  }

export async function getLoyalityOffersEligibilty(){
    let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getLoyalityOffersEligibilty")
    .then((res) => {
      console.log("these are the details", res);
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
      .post("https://better-mollusk-57.hasura.app/api/rest/getLoyalityOffersEligibilityByCustomer", {
        customerId: id,
      })
      .then((res) => {
        console.log("these are the details", res);
        return res?.data;
      })
      .catch((err) => {
        console.log("Something went wrong");
        return err;
      });
  
    return i;
  }

export async function getLoyalityTiers(){
    let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getLoyalityTiers")
    .then((res) => {
      console.log("these are the details", res);
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
      .post("https://better-mollusk-57.hasura.app/api/rest/getLoyalityTierByCustomer", {
        customerId: id,
      })
      .then((res) => {
        console.log("these are the details", res);
        return res?.data;
      })
      .catch((err) => {
        console.log("Something went wrong");
        return err;
      });
  
    return i;
  }

export async function getProducts(){
    let i = await axios
    .get("https://better-mollusk-57.hasura.app/api/rest/getProducts")
    .then((res) => {
      console.log("these are the details", res);
      return res?.data;
    })
    .catch((err) => {
      console.log("Something went wrong");
      return err;
    });

  return i;
}

