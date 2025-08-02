// src/App.jsx

// Importation des fichiers CSS et des composants nécessaires
import "./App.css";

// Composants principaux
import Header from "../components/header/Header";
import ProductPage from "../components/Product/Product";
import Cart from "../components/Product/Cart";
import Footer from "../components/Footer";
import UseReduce from "../components/UseReduce";
import MainC from "../components/UseReducer/MainC";
import CountContextProvider from "../context/CountContext.jsx";

const App = () => {
  return (
    <>
      <Header />
      <CountContextProvider>
        <MainC />
      </CountContextProvider>
      <ProductPage />
      <Cart />
      <Footer />
    </>
  );
};

export default App;
