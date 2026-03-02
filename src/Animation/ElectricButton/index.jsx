import React from "react";
import styles from "./styles.module.css";

const ElectricButton = ({ name, icon }) => {
  return (
    <button className={styles.electric_btn}>
      {name}
    </button>
  );
};

export default ElectricButton;
