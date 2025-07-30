// components/Product/ProductCart.jsx
import styles from "./Product.module.css";
import AddToCartButton from "./AddToCartButton";
import { useState } from "react";

/**
 * ProductCard component displays individual product information
 * @param {Object} props - Component props
 * @param {Object} props.product - Product object containing details
 */
const ProductCart = ({ product }) => {
  // Retirez la prop 'key' ici
  const [isHovered, setIsHovered] = useState(false);

  // Format price with 2 decimal places
  const formattedPrice = product.price.toFixed(2);

  // Generate rating stars with accessibility attributes
  const renderRatingStars = () => {
    const fullStars = "★".repeat(product.rate);
    const emptyStars = "☆".repeat(5 - product.rate);
    return (
      <div
        className={styles.rate}
        aria-label={`Rating: ${product.rate} out of 5 stars`}
      >
        {fullStars}
        {emptyStars}
      </div>
    );
  };

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hover : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with lazy loading */}
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
          loading="lazy"
          width="300"
          height="300"
        />
        {product.discount && (
          <span className={styles.discountBadge}>-{product.discount}%</span>
        )}
      </div>

      {/* Product Details */}
      <div className={styles.productDetails}>
        <h3 className={styles.productTitle} title={product.title}>
          {product.title}
        </h3>

        <div className={styles.priceContainer}>
          {product.originalPrice && (
            <span className={styles.originalPrice}>
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          <p className={styles.price}>${formattedPrice}</p>
        </div>

        <p className={styles.description}>
          {product.description.substring(0, 100)}...
        </p>

        {renderRatingStars()}

        <span className={styles.badge}>
          {product.category || product.categorie}
        </span>
      </div>

      {/* Add to Cart Button */}
      <div className={styles.buttonContainer}>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCart;
