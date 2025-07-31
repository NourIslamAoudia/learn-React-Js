// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShoppingCartContextProvider from "../context/ShoppingCartContext.jsx";
import { Toaster } from "react-hot-toast";

// recupirer l'element racine et le rendre
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCartContextProvider>
      <Toaster />
      <App />
    </ShoppingCartContextProvider>
  </StrictMode>
);
