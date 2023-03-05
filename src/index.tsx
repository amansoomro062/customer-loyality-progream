import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TierInfo from "./components/TierInfo";
import ProductsScreen from "./components/ProductScreen";
import NavBar from "./components/NavBar";
import CartScreen from "./components/CartScreen";
import AccountScreen from "./components/AccountScreen";

//Initialize Apollo Client for hasura connection

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <NavBar />
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/tiers" element={<TierInfo />} />
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/offers" element={<ProductsScreen />} />
          <Route path="/tiers" element={<TierInfo />} />
          <Route path="/account" element={<AccountScreen />} />

          <Route path="/login" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
