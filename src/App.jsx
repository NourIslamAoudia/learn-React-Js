import Footer from "../components/Footer";
import "./app.css";
import Product from "../components/Product/Product";
import products from "../data/product"; // Assuming you have a product data file
import Usestate from "../components/Usestate";
import Form from "../components/Form";
import Axios from "../components/Axios";

const App = () => {
  return (
    <>
      <Form />
      <Axios />
      <Footer />
    </>
  );
};
export default App;
