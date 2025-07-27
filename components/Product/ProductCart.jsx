import styles from "./Product.module.css"; // Using CSS Modules for scoped styles


const ProductCart = ({ product, index }) => {
  return (
    <>
      <div className={styles.card} key={index}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.rate}>{product.rate} ★</p>
        <span className={styles.badge}>{product.categorie}</span>
      </div>
    </>
  );
};

export default ProductCart;
