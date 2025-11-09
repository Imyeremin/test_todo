import { useState } from "react";
import styles from "./TodoItem.module.css";

type Todos = {
  text: string;
  id: number;
  completed: boolean;
};

interface TodoItemProps {
  data: Todos;
  deleteTodo: () => void;
  completedTodo: () => void;
  editTodo: (id: number, text: string) => void;
}
interface EditTodo {
  text: string;
  id: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  data,
  deleteTodo,
  completedTodo,
  editTodo,
}) => {
  const [flag, setFlag] = useState<boolean>(true);
  const [editText, setEditText] = useState<EditTodo>({
    text: data.text,
    id: data.id,
  });

  const hangleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditText({
      text: e.target.value,
      id: data.id,
    });
  };

  const addEditTodo = () => {
    editTodo(editText.id, editText.text);
    setFlag(!flag);
  };

  return (
    <div
      className={`${styles.todoitem_container} ${
        data.completed ? styles.todoitem_container_complite : ""
      }`}
    >
      {flag ? (
        <button onClick={() => setFlag(!flag)}>Редактировать</button>
      ) : (
        <button onClick={addEditTodo}>OK</button>
      )}
      {flag ? (
        <div className="todoitem-container_desc">{editText.text}</div>
      ) : (
        <input
          onChange={hangleChange}
          value={editText.text}
          type="text"
          className="todoitem-container_desc"
        />
      )}
      <div className={styles.todoitem_container_options}>
        <input
          checked={data.completed}
          onChange={() => {
            completedTodo();
          }}
          type="checkbox"
          className="todoitem-completed"
        />
        <button onClick={deleteTodo} className="todoitem-delete">
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
