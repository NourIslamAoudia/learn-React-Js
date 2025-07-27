// src/components/ProductPage.jsx
import styles from "./Product.module.css"; // Using CSS Modules for scoped styles

const ProductCarts = ({products}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product List</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.rate}>{product.rate} ★</p>
            <span className={styles.badge}>{product.categorie}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarts;
