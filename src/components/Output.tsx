import React from "react";
import { DeltaTimeItem } from "./deltaTimeItem";
import styles from "./Output.module.css";
import { useParams } from "react-router";
import { deltaTimeToStringConverter } from "../utils/deltaTimeToStringConverter";

interface Params {
  params:string
}

const OutputConnected = () => {
  const { params }: Params = useParams();
  const appData: AppData = JSON.parse(params);
  const today = new Date();
  const dateFromInput = new Date(appData.date);
  const deltaTime = [
    today.getFullYear() - dateFromInput.getFullYear(),
    today.getMonth() - dateFromInput.getMonth(),
    today.getDate() - dateFromInput.getDate(),
    today.getHours() - Number(appData.time.slice(0, 2)),
    today.getMinutes() - Number(appData.time.slice(3, 5)),
    today.getSeconds(),
  ];

  const deltaTimeStrings: string[] = deltaTimeToStringConverter(deltaTime);

  return <Output deltaTime={deltaTimeStrings} appData={appData} />;
};

interface AppData {
  text: string;
  date: string;
  time: string;
}

interface Props {
  deltaTime: string[];
  appData: AppData;
}

export const Output = ({ deltaTime, appData }: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.text}>{appData.text}</div>
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
