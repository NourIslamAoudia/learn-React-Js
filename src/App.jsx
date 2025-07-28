import Footer from "../components/Footer";
import "./app.css";
import Product from "../components/Product/Product";
import products from "../data/product"; // Assuming you have a product data file
import Usestate from "../components/Usestate";
import Form from "../components/Form";

const App = () => {
  return (
    <>
      <Form />
      <Footer />
    </>
  );
};
export default App;
