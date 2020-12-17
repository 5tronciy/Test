import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./Input.module.css";

const InputConnected = () => {
  const onCreate = () => {};
  const [dateValue, onChangeDate] = useState(undefined);
  const [timeValue, onChangeTime] = useState(undefined);

  return (
    <Input
      onCreate={onCreate}
      onChangeDate={onChangeDate}
      dateValue={dateValue}
      onChangeTime={onChangeTime}
      timeValue={timeValue}
    />
  );
};

interface Props {
  onCreate: () => void;
  onChangeDate: (event: any) => void;
  dateValue: Date | undefined;
  onChangeTime: (event: any) => void;
  timeValue: any;
}

export const Input = ({
  onCreate,
  onChangeDate,
  dateValue,
  onChangeTime,
  timeValue,
}: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.textBox} placeholder="Любой текст...">
        <TextareaAutosize />
      </div>

      <div className={styles.dateBox} placeholder="Дата">
        <DatePicker onChange={onChangeDate} value={dateValue} />
      </div>
      <div className={styles.timeBox} placeholder="Время">
        <TimePicker onChange={onChangeTime} value={timeValue} />
      </div>
      <button type="button" className={styles.create} onClick={onCreate}>
        <span className={styles.buttonCreateName}>Создать</span>
      </button>
    </div>
  );
};

export default InputConnected;
