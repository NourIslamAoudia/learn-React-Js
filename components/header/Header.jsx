// import "./header.css"; // Assuming you have a CSS file for styling
import styles from "./header.module.css"; // Using CSS Modules for scoped styles
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <NavBar />
    </header>

  );
};

export default Header;
