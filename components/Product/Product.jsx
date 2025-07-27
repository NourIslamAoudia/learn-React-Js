// src/components/ProductPage.jsx
import styles from "./Product.module.css"; // Using CSS Modules for scoped styles
import ProductCart from "./ProductCart";

const Product = ({ products }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCart product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
