import { useState, useEffect, useContext } from "react";
import styles from "./Product.module.css";
import toast from "react-hot-toast";
import { cartItemsContext } from "../../src/App"; // Correct import for context

/**
 * A button component for adding products to cart with quantity selection
 * @param {Object} product - The product to add to cart
 * @param {number} initialQuantity - Initial quantity (default: 1)
 */
const AddToCartButton = ({ product, initialQuantity = 1 }) => {
  // Context and state initialization
  const { setCartItems } = useContext(cartItemsContext);
  const productId = product.id || product.title;

  // Component state
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isAdded, setIsAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // ========== Event Handlers ========== //

  /**
   * Handles adding the product to cart with visual feedback
   */
  const handleAddToCart = () => {
    if (isAdded) return;

    console.log(`Added product ${productId} with quantity ${quantity} to cart`);

    // Update UI state
    setIsAdded(true);
    setIsAnimating(true);

    // Update cart context
    setCartItems((prevItems) => [...prevItems, { product, quantity }]);

    // Show success notification
    toast.success(`Added ${quantity} item${quantity > 1 ? "s" : ""} to cart`, {
      duration: 2000,
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "17px",
      },
    });

    // Reset animation
    setTimeout(() => setIsAnimating(false), 1000);
  };

  /**
   * Validates and updates quantity from input
   * @param {Object} e - The change event
   */
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity("");
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      setQuantity(Math.max(1, Math.min(99, numValue)));
    }
  };

  /**
   * Ensures valid quantity when input loses focus
   */
  const handleBlur = () => {
    if (quantity === "" || quantity < 1) {
      setQuantity(1);
    }
  };

  /**
   * Adjusts quantity with animation
   * @param {number} amount - The amount to adjust (+/-)
   */
  const adjustQuantity = (amount) => {
    const newQuantity = Math.max(1, Math.min(99, quantity + amount));
    setQuantity(newQuantity);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
  };

  // ========== Render ========== //

  return (
    <div className={styles.addToCartContainer}>
      {/* Quantity Selector */}
      <div className={styles.quantitySelector}>
        <button
          onClick={() => adjustQuantity(-1)}
          className={`${styles.quantityButton} ${
            quantity <= 1 ? styles.disabled : ""
          }`}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          −
        </button>

        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={handleBlur}
          className={`${styles.quantityInput} ${
            isAnimating ? styles.bounce : ""
          }`}
          aria-label="Product quantity"
        />

        <button
          onClick={() => adjustQuantity(1)}
          className={`${styles.quantityButton} ${
            quantity >= 99 ? styles.disabled : ""
          }`}
          disabled={quantity >= 99}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`${styles.addToCartButton} 
          ${isAdded ? styles.added : ""} 
          ${isAnimating ? styles.pulse : ""}`}
        disabled={isAdded}
        aria-label={isAdded ? "Item added to cart" : "Add item to cart"}
      >
        {isAdded ? (
          <>
            <span className={styles.checkmark}>✓</span> Added to Cart!
          </>
        ) : (
          "Add to Cart"
        )}
      </button>

      {/* Feedback Message */}
      {isAdded && (
        <div className={styles.feedbackMessage}>
          {quantity} item{quantity > 1 ? "s" : ""} added to your cart
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
