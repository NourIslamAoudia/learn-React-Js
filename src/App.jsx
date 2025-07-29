// src/App.jsx
import "./app.css";
import Form from "../components/Form";
import Axios from "../components/Axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer"; // Make sure this component exists

const App = () => {
  return (
    <>
      <Form />
      <Axios />
      <ToastContainer newestOnTop limit={3} />
      <Footer />
    </>
  );
};

export default App;
