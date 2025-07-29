// src/components/ProductPage.jsx
import Button from "../Button";
import styles from "./Product.module.css"; // Using CSS Modules for scoped styles
import ProductCart from "./ProductCart";
import products from "../../data/product"; // Assuming you have a product data file


export const SayHello = (name) => {
  return `Hello, ${name}!`;
};

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productList}>
        {products.map((product, index) => (
          <ProductCart product={product} index={index} key={index} />
        ))}
      </div>
      <Button className={styles.button}>Add to Cart</Button>
    </div>
  );
};

export default Product;
