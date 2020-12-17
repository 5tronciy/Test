import React from "react";
import styles from "./deltaTimeItem.module.css";

const deltaTimeItemConnected = ({ deltaTimeItem }: any) => {
  return <DeltaTimeItem deltaTimeItem={deltaTimeItem} />;
};

export const DeltaTimeItem = ({ deltaTimeItem }: any) => {
  return <li className={styles.deltaTimeItem}>{deltaTimeItem}</li>;
};

export default deltaTimeItemConnected;
