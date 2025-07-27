// src/components/ProductPage.jsx
import styles from "./Product.module.css"; // Using CSS Modules for scoped styles
import products from "../../data/product";

const ProductCarts = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.price}>${product.price}</p>
            <span className={styles.badge}>{product.categorie}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarts;
