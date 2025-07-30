import { useContext } from "react";
import { cartItemsContext } from "../../src/App"; // Correct import for context
import styles from "./Product.module.css";
import { Link } from "react-router-dom"; // Pour une navigation plus fluide

const Cart = () => {
  const { cartItems, setCartItems } = useContext(cartItemsContext);
  console.log(cartItems);

  // Calcul des prix
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // const updateQuantity = (index, newQuantity) => {
  //   if (newQuantity < 1 || newQuantity > 99) return;

  //   setCartItems((prevItems) => {
  //     const updatedItems = [...prevItems];
  //     updatedItems[index].quantity = newQuantity;
  //     return updatedItems;
  //   });
  // };

  // const removeItem = (index) => {
  //   setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  // };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <div className={styles.emptyCartIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet</p>
          <Link to="/" className={styles.continueShoppingBtn}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${index}`}
                className={styles.cartItem}
              >
                <div className={styles.cartItemImage}>
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cartItemDetails}>
                  <h3>{item.product.title}</h3>
                  <p className={styles.cartItemPrice}>
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className={styles.cartItemActions}>
                    <div className={styles.cartItemQuantity}>
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        disabled={item.quantity >= 99}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className={styles.removeItemBtn}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>
                Subtotal (
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
              </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className={styles.checkoutBtn}
              onClick={() => alert("Proceeding to checkout")} // À remplacer par votre logique de checkout
            >
              Proceed to Checkout
            </button>
            <Link to="/products" className={styles.continueShoppingLink}>
              ← Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
