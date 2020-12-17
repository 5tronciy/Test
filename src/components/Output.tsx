import React from "react";
import styles from "./Output.module.css";

const OutputConnected = () => {
  return <Output />;
};

export const Output = () => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>Любой текст</div>
      <div className={styles.deltaTime}>
        <ul>
          <li>26 лет</li>
          <li>7 месяцев</li>
          <li>13 дней</li>
        </ul>
      </div>
    </div>
  );
};

export default OutputConnected;
