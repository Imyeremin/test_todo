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
}

const TodoItem: React.FC<TodoItemProps> = ({
  data,
  deleteTodo,
  completedTodo,
}) => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div
      className={`${styles.todoitem_container} ${
        data.completed ? styles.todoitem_container_complite : ""
      }`}
    >
      <button>Редактировать</button>
      <div className="todoitem-container_desc">{data.text}</div>
      <div className={styles.todoitem_container_options}>
        <input
          checked={check}
          onChange={(e) => {
            setCheck(e.target.checked);
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
