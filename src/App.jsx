// src/App.jsx
import "./app.css";
import Form from "../components/Form";
import Axios from "../components/Axios";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer"; // Make sure this component exists
import UseRef from "../components/UseRef"; // Assuming you have a UseRef component
import ApiContext from "../components/ApiContext";
import { createContext } from "react";
import Header from "../components/header/Header"; // Assuming you have a Header component
import ProductPage from "../components/Product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../components/Product/Cart"; // Assuming you have a Cart component
import { useState } from "react";

export const dataContext = createContext();
export const cartItemsContext = createContext();
const App = () => {
  const data = ["islam", "CyberSecurity", "WebDev"];
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <cartItemsContext.Provider value={{ cartItems, setCartItems }}>
        <Header />
        <ProductPage />
        <Toaster />
        {/* <dataContext.Provider value={{ data }}>
        <ApiContext />
      </dataContext.Provider>
      <Form />
      <UseRef />
      <Axios />
      <ToastContainer newestOnTop limit={3} /> */}
        <Cart />
        <Footer />
      </cartItemsContext.Provider>
    </>
  );
};

export default App;
