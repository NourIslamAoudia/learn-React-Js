import styles from "./header.module.css";

const NavBar = ({ links }) => {
  return (
    <>
      <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
      <label htmlFor="menu-toggle" className={styles.menuButton}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className={styles.navbar}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
