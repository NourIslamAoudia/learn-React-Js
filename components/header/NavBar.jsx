import styles from "./header.module.css"; // Using CSS Modules for scoped styles

const NavBar = ({ links }) => {
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
