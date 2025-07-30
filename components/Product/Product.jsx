import { useState, useEffect, createContext } from "react";
import styles from "./Product.module.css";
import ProductCart from "./ProductCart";
import Products from "../../data/product";

// Create context for cart items
export const cartItemsContext = createContext();

/**
 * ProductPage component displays a list of products with loading states
 * and manages the shopping cart context
 */
const ProductPage = () => {
  // State management
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products with simulated loading
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulate API call with timeout
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

  // ========== Render Functions ========== //

  /**
   * Renders loading skeleton cards
   */
  const renderLoadingSkeletons = () =>
    Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className={styles.skeletonCard}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonText}></div>
      </div>
    ));

  /**
   * Renders the product list
   */
  const renderProductList = () =>
    products.map((product) => (
      <cartItemsContext.Provider
        value={{ cartItems, setCartItems }}
        key={product.id || product.title}
      >
        <ProductCart product={product} />
      </cartItemsContext.Provider>
    ));

  // ========== Main Render ========== //

  if (error) {
    return (
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.errorMessage}>
          {error}
          <button
            onClick={() => window.location.reload()}
            className={styles.retryButton}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Products</h1>

      {/* Cart summary badge */}
      {cartItems.length > 0 && (
        <div className={styles.cartSummary}>
          Items in cart: {cartItems.length}
        </div>
      )}

      <div className={styles.productList}>
        {loading ? renderLoadingSkeletons() : renderProductList()}
      </div>
    </div>
  );
};

export default ProductPage;
