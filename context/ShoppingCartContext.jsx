// context/ShoppingCartContext.jsx
import { useState, useEffect, createContext } from "react";

// Créer le contexte avec des valeurs par défaut appropriées
export const cartItemsContext = createContext({}); // as object without initial values

const ShoppingCartContextProvider = ({ children }) => {
  //children is the content that will be wrapped by this context provider, because we cant use contactValue directly in the context provider
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
