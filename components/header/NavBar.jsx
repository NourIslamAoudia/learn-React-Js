import styles from "./header.module.css"; // Using CSS Modules for scoped styles

const NavBar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ];
  return (
    <ul className={styles.navbar}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
