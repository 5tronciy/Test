import React from "react";
import styles from "./Input.module.css";

const InputConnected = () => {
  const onCreate = () => {};

  return <Input onCreate={onCreate} />;
};

interface Props {
  onCreate: () => void;
}

export const Input = ({ onCreate }: Props) => {
  return (
    <div className={styles.content}>
      <input
        type="text"
        className={styles.textBox}
        placeholder="Любой текст..."
      />
      <input type="date" className={styles.dateBox} placeholder="Дата" />
      <input type="time" className={styles.timeBox} placeholder="Время" />
      <button type="button" className={styles.create} onClick={onCreate}>
        <span className={styles.buttonCreateName}>Создать</span>
      </button>
    </div>
  );
};

export default InputConnected;
