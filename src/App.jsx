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

export const dataContext = createContext();
const App = () => {
  const data = ["islam", "CyberSecurity", "WebDev"];
  return (
    <>
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
      <Footer />
    </>
  );
};

export default App;
