import React from "react";
import { DeltaTimeItem } from "./deltaTimeItem";
import styles from "./Output.module.css";

const OutputConnected = () => {
  return <Output deltaTime={["7 лет", "10 месяцев", "2 дня"]} />;
};

export const Output = ({ deltaTime }: any) => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>Любой текст</div>
      <div className={styles.deltaTimeWrapper}>
        <ul className={styles.deltaTime}>
          {deltaTime.map((deltaTimeItem: string) => (
            <DeltaTimeItem deltaTimeItem={deltaTimeItem} key={deltaTimeItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OutputConnected;
