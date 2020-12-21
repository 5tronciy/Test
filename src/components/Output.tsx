import React from "react";
import { DeltaTimeItem } from "./deltaTimeItem";
import styles from "./Output.module.css";
import { useParams } from "react-router";
import { deltaTimeToStringConverter } from "../utils/deltaTimeToStringConverter";

interface Params {
  params: string;
}

const OutputConnected = () => {
  const { params }: Params = useParams();
  console.log(params);
  const appData: AppData = JSON.parse(params);
  const today = new Date();
  const todayTimeStamp = today.getTime();
  const difference = Math.abs(Number(appData.date) - todayTimeStamp);
  console.log(appData.date, todayTimeStamp, difference);
  const deltaTime = [
    Math.floor(difference / (1000 * 3600 * 24 * 365.25)),
    Math.floor(difference / (1000 * 3600 * 24 * 12)) % 30,
    Math.floor(difference / (1000 * 3600 * 24)) % 365,
    Math.floor(difference / (1000 * 3600)) % 24,
    Math.floor(difference / (1000 * 60)) % 60,
    Math.floor(difference / 1000) % 60,
  ];

  const deltaTimeStrings: string[] = deltaTimeToStringConverter(deltaTime);

  return <Output deltaTime={deltaTimeStrings} appData={appData} />;
};

interface AppData {
  text: string;
  date: Number;
}

interface Props {
  deltaTime: string[];
  appData: AppData;
}

export const Output = ({ deltaTime, appData }: Props) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.deltaTimeWrapper}>
          <ul className={styles.deltaTime}>
            {deltaTime.map((deltaTimeItem: string) => (
              <DeltaTimeItem
                deltaTimeItem={deltaTimeItem}
                key={deltaTimeItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.text}>{appData.text}</div>
    </>
  );
};

export default OutputConnected;
