
import Footer from "../components/Footer";
import "./app.css";
import Product from "../components/Product/Product";
import products from "../data/product"; // Assuming you have a product data file

const App = () => {
  return (
    <>
      <Product products={products} />
      <Footer />
    </>
  );
};
export default App;
