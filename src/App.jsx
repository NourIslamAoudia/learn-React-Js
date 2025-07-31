// src/App.jsx

// Importation des fichiers CSS et des composants nécessaires
import "./App.css";

// Composants principaux
import Header from "../components/header/Header";
import ProductPage from "../components/Product/Product";
import Cart from "../components/Product/Cart";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <ProductPage />
      <Cart />
      <Footer />
    </>
  );
};

export default App;
