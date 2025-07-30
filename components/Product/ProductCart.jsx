import styles from "./Product.module.css";
import AddToCartButton from "./AddToCartButton";

const ProductCart = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.rate}>
        {"★".repeat(product.rate) + "☆".repeat(5 - product.rate)}
      </div>
      <span className={styles.badge}>
        {product.category || product.categorie}
      </span>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCart;
