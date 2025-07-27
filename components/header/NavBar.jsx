import styles from "./header.module.css"; // Using CSS Modules for scoped styles

const NavBar = () => {
  return (
    <ul className={styles.navbar}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/services">Services</a>
    </ul>
  );
};

export default NavBar;
