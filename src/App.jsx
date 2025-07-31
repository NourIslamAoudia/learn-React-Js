// src/App.jsx

// Importation des fichiers CSS et des composants nécessaires
import "./App.css";
import { useState, useEffect, createContext } from "react";
import { Toaster } from "react-hot-toast";

// Composants principaux
import Header from "../components/header/Header";
import ProductPage from "../components/Product/Product";
import Cart from "../components/Product/Cart";
import Footer from "../components/Footer";

// Composants secondaires (commentés pour le moment, à activer si besoin)
import Form from "../components/Form";
import Axios from "../components/Axios";
import UseRef from "../components/UseRef";
import ApiContext from "../components/ApiContext";

// Contexte global pour les données (ex: utilisateur, sujet, etc.)
export const dataContext = createContext();
export const cartItemsContext = createContext();

const App = () => {
  // Exemple de données statiques
  const data = ["islam", "CyberSecurity", "WebDev"];

  // État pour gérer les articles du panier (cart)
  const [cartItems, setCartItems] = useState(() => {
    // Au premier rendu, on récupère les données du localStorage
    const savedCart = localStorage.getItem("myCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sauvegarde automatique dans localStorage à chaque changement de cartItems
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <cartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {/* Composants principaux affichés sur la page */}
      <Header />
      <ProductPage />
      <Toaster />
      <Cart />
      <Footer />

      {/* Composants secondaires à activer si besoin */}
      {/*
      <dataContext.Provider value={{ data }}>
        <ApiContext />
      </dataContext.Provider>
      <Form />
      <UseRef />
      <Axios />
      */}
    </cartItemsContext.Provider>
  );
};

export default App;
