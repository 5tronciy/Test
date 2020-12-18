import React from "react";
import styles from "./deltaTimeItem.module.css";

interface DeltaTimeItemInterface {
  deltaTimeItem:string
}

const deltaTimeItemConnected = ({ deltaTimeItem }: DeltaTimeItemInterface) => {
  return <DeltaTimeItem deltaTimeItem={deltaTimeItem} />;
};

export const DeltaTimeItem = ({ deltaTimeItem }: DeltaTimeItemInterface) => {
  return <li className={styles.deltaTimeItem}>{deltaTimeItem}</li>;
};

export default deltaTimeItemConnected;
