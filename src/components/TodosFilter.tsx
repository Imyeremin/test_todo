import { useState } from "react";
import styles from "./TodosFilter.module.css";
interface TodoFilter {
  todosFilter: (filter: number) => void;
}

const TodosFilter: React.FC<TodoFilter> = ({ todosFilter }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className={styles.filter_container}>
      <button className={styles.btn_open} onClick={() => setOpen(!open)}>{open ? 'Filter X' : 'Filter V'}</button>

      {open ? (
        <div className={styles.filter_container_btns_filter}>
          <button onClick={() => todosFilter(0)}>Все</button>
          <button onClick={() => todosFilter(1)}>Активные</button>
          <button onClick={() => todosFilter(2)}>Выполненые</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodosFilter;
