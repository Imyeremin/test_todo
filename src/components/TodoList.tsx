import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

type Todos = {
  text: string;
  id: number;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todos[]>([
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis nisi dignissimos mollitia quod maxime ad nemo doloremque,quaerat deleniti Optio voluptatibus, deleniti sapiente ea dolorum dictareiciendis nisi repudiandae.",
      id: 0,
      completed: false,
    },
    {
      text: "sit amet consectetur adipisicing elit. Voluptates veritatis nisi dignissimos mollitia quod maxime ad nemo doloremque,quaerat deleniti Optio voluptatibus, deleniti sapiente ea dolorum dictareiciendis nisi repudiandae.",
      id: 1,
      completed: false,
    },
    {
      text: "Voluptates veritatis nisi dignissimos mollitia quod maxime ad nemo doloremque,quaerat deleniti Optio voluptatibus, deleniti sapiente ea dolorum dictareiciendis nisi repudiandae.",
      id: 2,
      completed: false,
    },
  ]);

  const addTodo = (value: string) => {
    const newTodo: Todos = {
      text: value,
      id: Math.random(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className={styles.todolist_container}>
      {todos.map((todo: Todos) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
