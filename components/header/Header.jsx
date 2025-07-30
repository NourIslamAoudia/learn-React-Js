import styles from "./header.module.css"; // Using CSS Modules for scoped styles
import NavBar from "./NavBar";

const Header = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <NavBar links={links} />
    </header>
  );
};

export default Header;
