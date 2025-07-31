// context/ShoppingCartContext.jsx
import { useState, useEffect, createContext, useContext } from "react";

// Créer le contexte avec des valeurs par défaut appropriées
// le but de ce contexte est de partager les éléments du panier entre les composants
// et de permettre aux composants d'accéder et de modifier le panier
export const cartItemsContext = createContext({}); // as object without initial values

const ShoppingCartContextProvider = ({ children }) => {
  //children is the content that will be wrapped by this context provider, because we cant use contextValue directly in the context provider
  //initializing cartItems with a value from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    try {
      // Try to retrieve the cart from localStorage
      const savedCart = localStorage.getItem("myCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return [];
    }
  });
  // Save cart to localStorage whenever it changes
  // This ensures that the cart persists across page reloads
  useEffect(() => {
    try {
      localStorage.setItem("myCart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItems]);

  const contextValue = {
    cartItems,
    setCartItems,
  };

  return (
    <cartItemsContext.Provider value={contextValue}>
      {children}
    </cartItemsContext.Provider>
  );
};

export default ShoppingCartContextProvider;

// Custom hook to use the ShoppingCartContext
// This allows components to access the context without needing to import it directly
export const useShoppingCartContext = () => {
  const context = useContext(cartItemsContext);
  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used within a ShoppingCartContextProvider"
    );
  }
  return context;
};
