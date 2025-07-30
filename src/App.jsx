// src/App.jsx
import "./app.css";
import Form from "../components/Form";
import Axios from "../components/Axios";
import "react-toastify/dist/ReactToastify.css";
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
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<h2>All Products Page</h2>} />
            <Route path="/about" element={<h2>About Us Page</h2>} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
          <Toaster />
        </Router>
      </cartItemsContext.Provider>
    </>
  );
};

export default App;
