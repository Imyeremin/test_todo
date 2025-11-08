import { useState } from "react";
import styles from "./TodoItem.module.css";

type Todos = {
  text: string;
  id: number;
  completed: boolean;
};

interface TodoItemProps {
  data: Todos;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  return (
    <div className={styles.todoitem_container}>
      <div className="todoitem-container_desc">{data.text}</div>
      <div className={styles.todoitem_container_options}>
        <input type="checkbox" className="todoitem-completed" />
        <button className="todoitem-delete">Удалить</button>
      </div>
    </div>
  );
};

export default TodoItem;
