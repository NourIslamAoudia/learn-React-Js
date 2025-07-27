import { useState } from "react";
import From from "../components/from";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import "./app.css";
import ProductCarts from "../components/Product/ProductCart";
import products from "../data/product"; // Assuming you have a product data file

const App = () => {
  return (
    <>
      <ProductCarts products={products} />
      <Footer />
    </>
  );
};
export default App;
