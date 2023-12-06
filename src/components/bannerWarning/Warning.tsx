import React from "react";
import styles from "./styles.module.css";
import { HiReceiptPercent } from "react-icons/hi2";


function Warning() {
  return (
    <div className={styles.barWarning}>
      <div className={styles.subBar}>
        <div className={styles.icon}>
          <HiReceiptPercent size={20} className={styles.percentIcon}/>
        </div>
        <p className={styles.textBar}>
          Descuento del 10% hasta el 15 de Diciembre
        </p>
      </div>
    </div>
  );
}

export default Warning;
