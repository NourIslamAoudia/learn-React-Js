import { useState } from "react";
import styles from "./Product.module.css";
import ProductCart from "./ProductCart";

const Product = ({ products }) => {
  // State to control the visibility of products
  // This is useful if you want to display products on a button click
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <button
        type="button"
        onClick={() => setShowProducts(true)}
        className={styles.btn}
      >
        Display Products
      </button>

      <button
        type="button"
        onClick={() => setShowProducts(false)}
        className={styles.btn}
      >
        Hide Products
      </button>

      {showProducts && (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCart product={product} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
