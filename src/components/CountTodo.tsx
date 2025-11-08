interface CountTodo {
  count: number;
}

const CountTodo: React.FC<CountTodo> = ({ count }) => {
  return (
    <div>
      <b>{count + " active task"}</b>
    </div>
  );
};

export default CountTodo;
