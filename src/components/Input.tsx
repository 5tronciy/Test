import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TimePicker, { TimePickerValue } from "react-time-picker";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./Input.module.css";
import { Link } from "react-router-dom";

const InputConnected = () => {
  const [dateValue, setDate] = useState(new Date());
  const [timeValue, setTime] = useState('00:00');
  const [textValue, setText] = useState("");
  const params = JSON.stringify({
    text: textValue,
    date: dateValue,
    time: timeValue,
  });

  const onChangeText = (event: any) => {
    setText(event.target.value);
  };

  const onChangeDate = (event: any) => {
   setDate(event);
  };
  const onChangeTime = (event: TimePickerValue) => {
    setTime(event.toString());
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
  onCreate: ()=>void;
  onChangeText: (event:any)=>void;
  onChangeDate: (event: Date|Date[]) => void;
  dateValue: Date | undefined;
  onChangeTime: (event: TimePickerValue) => void;
  timeValue: TimePickerValue;
  params: string;
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
      <div className={styles.create} onClick={onCreate}>
        <Link to={params}>
          <span className={styles.buttonCreateName}>Создать</span>
        </Link>
      </div>
    </div>
  );
};

export default InputConnected;
