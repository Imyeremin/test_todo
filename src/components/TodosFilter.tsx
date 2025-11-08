interface TodoFilter {
  todosFilter: (filter: number) => void;
}

const TodosFilter: React.FC<TodoFilter> = ({ todosFilter }) => {
  return (
    <div className="filter_container">
      <button onClick={() => todosFilter(0)}>Все</button>
      <button onClick={() => todosFilter(1)}>Активные</button>
      <button onClick={() => todosFilter(2)}>Выполненые</button>
    </div>
  );
};

export default TodosFilter;
