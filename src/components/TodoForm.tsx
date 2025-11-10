import styles from "./TodoForm.module.css";
import { useState } from "react";

interface TodoFormProps {
  addTodo: (value: string) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");
  const [err, setErr] = useState<boolean>(true);
  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setErr(true);
    setText(e.target.value);
  };

  const onCliclAdd = () => {
    if (text === "") {
      setErr(false);
      return;
    } else {
      setErr(true);
      addTodo(text);
      setText("");
    }
  };

  return (
    <>
      {" "}
      <div className={styles.todoform_container}>
        <label className={styles.todoform_label} htmlFor="">
          New
          <input
            className={styles.todoform_input}
            value={text}
            onChange={hangleChange}
            type="text"
          />
        </label>
        <button className={styles.todoform_btn} onClick={onCliclAdd}>
          Добавить
        </button>
      </div>
      {!err ? <div className={styles.todoform_err}>Введите значение!</div> : ""}
    </>
  );
};

export default TodoForm;
