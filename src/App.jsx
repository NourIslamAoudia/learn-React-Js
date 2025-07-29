// src/App.jsx
import "./app.css";
import Form from "../components/Form";
import Axios from "../components/Axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer"; // Make sure this component exists
import UseRef from "../components/UseRef"; // Assuming you have a UseRef component
import ApiContext from "../components/ApiContext";
import { createContext } from "react";

export const dataContext = createContext();
const App = () => {
  const data = ["islam", "CyberSecurity", "WebDev"];
  return (
    <>
      <dataContext.Provider value={{ data }}>
        <ApiContext />
      </dataContext.Provider>
      <Form />
      <UseRef />
      <Axios />
      <ToastContainer newestOnTop limit={3} />
      <Footer />
    </>
  );
};

export default App;
