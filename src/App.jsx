import { useState } from "react";
import From from "../components/from";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import "./app.css";
import ProductCarts from "../components/Product/ProductCart";

const App = () => {
  return (
    <>
      <Header />
      <ProductCarts />
      <Footer />
    </>
  );
};
export default App;
