import styles from "./TodoForm.module.css";
import { useState } from "react";

interface TodoFormProps {
  addTodo: (value: string) => void;
}
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const onCliclAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <div className={styles.todoform_container}>
      <input value={text} onChange={hangleChange} type="text" />
      <button onClick={onCliclAdd}>Добавить</button>
    </div>
  );
};

export default TodoForm;
