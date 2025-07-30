import styles from "./Product.module.css";
import ProductCart from "./ProductCart";
import Products from "../../data/product";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProducts(Products);
      setLoading(false);
    }, 2000); // 2000 milliseconds (2 seconds) delay
  }, []);

  if (loading) {
    return (
      <div className={styles.productContainer}>
        <h1 className={styles.title}>Products</h1>
        <div className={styles.productList}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={styles.skeletonCard}>
              <div className={styles.skeletonImage}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
              <div className={styles.skeletonText}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCart product={product} key={product.id || product.title} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
