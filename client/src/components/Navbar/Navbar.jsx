import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
  <div>
      <div className={styles.abc}>
      
        <Link to="/" className={styles.link}>Hello!</Link>

      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/addproduct" className={styles.link}>Add Products</Link>
      <Link to="/allproducts" className={styles.link}>All Products</Link>
      <Link to="/offer" className={styles.link}>offer</Link>

    </div>
  </div>
  );
};
