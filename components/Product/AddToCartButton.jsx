import { useState } from "react";
import styles from "./Product.module.css";

const AddToCartButton = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Ici vous pouvez ajouter la logique pour ajouter au panier
    console.log(`Added product ${productId} with quantity ${quantity} to cart`);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };
  // Fonction pour gérer le changement de quantité
  // Limite la quantité entre 1 et 99
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(99, parseInt(e.target.value) || 1));
    setQuantity(value);
  };

  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.quantitySelector}>
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className={styles.quantityButton}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={handleQuantityChange}
          className={styles.quantityInput}
        />
        <button
          onClick={() => setQuantity((q) => Math.min(99, q + 1))}
          className={styles.quantityButton}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className={`${styles.addToCartButton} ${isAdded ? styles.added : ""}`}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCartButton;
