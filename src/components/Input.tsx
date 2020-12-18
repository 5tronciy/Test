import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./Input.module.css";
import { Link } from "react-router-dom";

const InputConnected = () => {
  const [dateValue, setDate] = useState(undefined);
  const [timeValue, setTime] = useState(undefined);
  const [textValue, setText] = useState("");
  const params = JSON.stringify({
    text: textValue,
    date: dateValue,
    time: timeValue,
  });
  console.log(params);

  const onChangeText = (event: any) => {
    setText(event.target.value);
  };

  const onChangeDate = (event: any) => {
    setDate(event);
  };
  const onChangeTime = (event: any) => {
    setTime(event);
  };
  const onCreate = () => {};

  return (
    <Input
      onCreate={onCreate}
      onChangeText={onChangeText}
      onChangeDate={onChangeDate}
      dateValue={dateValue}
      onChangeTime={onChangeTime}
      timeValue={timeValue}
      params={params}
    />
  );
};

interface Props {
  onCreate: any;
  onChangeText: any;
  onChangeDate: (event: any) => void;
  dateValue: Date | undefined;
  onChangeTime: (event: any) => void;
  timeValue: any;
  params: any;
}

export const Input = ({
  onCreate,
  onChangeText,
  onChangeDate,
  dateValue,
  onChangeTime,
  timeValue,
  params,
}: Props) => {
  return (
    <div className={styles.content}>
      <div className={styles.textBox} placeholder="Любой текст...">
        <TextareaAutosize onChange={onChangeText} />
      </div>

      <div className={styles.dateBox} placeholder="Дата">
        <DatePicker onChange={onChangeDate} value={dateValue} />
      </div>
      <div className={styles.timeBox} placeholder="Время">
        <TimePicker onChange={onChangeTime} value={timeValue} />
      </div>
      <button type="button" className={styles.create} onClick={onCreate}>
        <Link to={params}>
          <span className={styles.buttonCreateName}>Создать</span>
        </Link>
      </button>
    </div>
  );
};

export default InputConnected;
