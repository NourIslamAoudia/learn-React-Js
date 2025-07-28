// src/components/ProductPage.jsx
import Button from "../Button";
import styles from "./Product.module.css"; // Using CSS Modules for scoped styles
import ProductCart from "./ProductCart";

export const SayHello = (name) => {
  return `Hello, ${name}!`;
};

const Product = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <Button oneclick={() => alert(SayHello("John Doe"))}>
        <span>btn 1</span>
        <h1>Product 1</h1>
        <p className={styles.description}>This is a great product.</p>
      </Button>
      <Button oneclick={() => alert(SayHello("Jane Smith"))}>
        <span>btn 2</span>
        <h1>Product 2</h1>
        <p className={styles.description}>This is another great product.</p>
      </Button>
    </div>
  );
};

export default Product;
