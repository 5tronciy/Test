import React, { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import "./DatePicker.css";
import TimePicker, { TimePickerValue } from "react-time-picker";
import "./TimePicker.css";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./Input.module.css";
import { Link } from "react-router-dom";

const InputConnected = () => {
  const [dateValue, setDate] = useState(new Date());
  const [timeValue, setTime] = useState("00:00");
  const [textValue, setText] = useState("");

  var time = new Date(dateValue);

  const params =
    "Test/" +
    JSON.stringify({
      text: textValue,
      date:
        time.getTime() +
        Number(timeValue.slice(0, 2)) * 360000 +
        Number(timeValue.slice(3, 5)) * 60000,
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

  return (
    <Input
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
  onChangeText: (event: any) => void;
  onChangeDate: (event: Date | Date[]) => void;
  dateValue: Date | undefined;
  onChangeTime: (event: TimePickerValue) => void;
  timeValue: TimePickerValue;
  params: string;
}

export const Input = ({
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
        <DatePicker
          onChange={onChangeDate}
          value={dateValue}
          format="dd MMMM yyyy"
          isOpen={false}
          clearIcon={null}
          required={true}
        />
      </div>
      <div className={styles.timeBox} placeholder="Время">
        <TimePicker
          onChange={onChangeTime}
          value={timeValue}
          format={"HH:mm"}
          disableClock={true}
          isOpen={false}
          required
        />
      </div>
      <Link to={params}>
        <div className={styles.create}>
          <span className={styles.buttonCreateName}>Создать</span>
        </div>
      </Link>
    </div>
  );
};

export default InputConnected;
