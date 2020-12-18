import React from "react";
import { DeltaTimeItem } from "./deltaTimeItem";
import styles from "./Output.module.css";
import { useParams } from "react-router";

const OutputConnected = () => {
  const params: any = useParams();
  return (
    <Output deltaTime={["7 лет", "10 месяцев", "2 дня"]} params={params} />
  );
};

export const Output = ({ deltaTime, params }: any) => {
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
