import React from "react";
import { DeltaTimeItem } from "./deltaTimeItem";
import styles from "./Output.module.css";
import { useParams } from "react-router";
import { deltaTimeToStringConverter } from "../utils/deltaTimeToStringConverter";

var moment = require("moment");
require("moment-precise-range-plugin");

interface Params {
  params: string;
}

const OutputConnected = () => {
  const { params }: Params = useParams();
  const appData: AppData = JSON.parse(params);
  const today = new Date();
  var difference = moment.preciseDiff(today, appData.date, true);

  const deltaTime = [
    difference.years,
    difference.months,
    difference.days,
    difference.hours,
    difference.minutes,
    difference.seconds,
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
