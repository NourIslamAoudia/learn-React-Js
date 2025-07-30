import { useState, useEffect } from "react";
import styles from "./Product.module.css";
import toast from "react-hot-toast";
import { useContext } from "react";
import { cartItemsContext } from "./Product"; // Import the context from Product.jsx

const AddToCartButton = ({ product, initialQuantity = 1 }) => {
  const { setCartItems } = useContext(cartItemsContext);
  const productId = product.id || product.title; // Use a unique identifier for the product
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isAdded, setIsAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle adding to cart with animation
  const handleAddToCart = () => {
    if (isAdded) return;
    console.log(`Added product ${productId} with quantity ${quantity} to cart`);
    setIsAdded(true);
    setIsAnimating(true);
    // Update cart items in parent component
    setCartItems((prevItems) => [...prevItems, { product, quantity }]); // ...prevItems : spread operator to keep existing items
    // Show a toast notification
    toast.success(`Added ${quantity} item${quantity > 1 ? "s" : ""} to cart`, {
      duration: 2000,
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "17px",
      },
    });

    // Reset animation after 2 seconds
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // Handle quantity change with input validation
  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity("");
      return;
    }
    // Ensure the input is a valid number between 1 and 99
    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      setQuantity(Math.max(1, Math.min(99, numValue)));
    }
  };

  // Handle blur to ensure valid quantity
  const handleBlur = () => {
    if (quantity === "" || quantity < 1) {
      setQuantity(1);
    }
  };

  // Handle increment/decrement with animation
  const adjustQuantity = (amount) => {
    const newQuantity = Math.max(1, Math.min(99, quantity + amount));
    setQuantity(newQuantity);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <div className={styles.addToCartContainer}>
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

      {/* Micro-interaction feedback */}
      {isAdded && (
        <div className={styles.feedbackMessage}>
          {quantity} item{quantity > 1 ? "s" : ""} added to your cart
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
