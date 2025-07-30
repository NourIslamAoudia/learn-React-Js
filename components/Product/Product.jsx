// components/Product/Product.jsx
import { useState, useEffect, useContext } from "react";
import styles from "./Product.module.css";
import ProductCart from "./ProductCart";
import Products from "../../data/product";
import { cartItemsContext } from "../../src/App"; // Correct import for context

const ProductPage = () => {
  const { cartItems } = useContext(cartItemsContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setProducts(Products);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Product loading error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderLoadingSkeletons = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <div key={`skeleton-${index}`} className={styles.skeletonCard}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
      </div>
    ));

  if (error) {
    return (
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.errorMessage}>
          {error}
          <button onClick={() => window.location.reload()} className={styles.retryButton}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Products</h1>
      
      {cartItems.length > 0 && (
        <div className={styles.cartSummary}>
          Items in cart: {cartItems.length}
        </div>
      )}

      <div className={styles.productList}>
        {loading ? renderLoadingSkeletons() : products.map((product) => (
          <ProductCart 
            product={product} 
            key={product.id} // La clé est définie ici, dans le map
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;