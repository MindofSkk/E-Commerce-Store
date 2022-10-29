import React from "react";
import styles from "./Footer.module.css";

export const Fotter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.a}>
       
      <p>E-commerce</p>
      </div>
      <div className={styles.b}>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
      <div className={styles.c}>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </div>
  );
};
