// import "./header.css"; // Assuming you have a CSS file for styling
import styles from "./header.module.css"; // Using CSS Modules for scoped styles
import NavBar from "./NavBar";

const Header = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ];
  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <NavBar links={links} />
    </header>
  );
};

export default Header;
