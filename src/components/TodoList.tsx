import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import TodosFilter from "./TodosFilter";
import CountTodo from "./CountTodo";

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

  const [countTodo, setCountTodo] = useState<number>(0);

  const addTodo = (value: string) => {
    const newTodo: Todos = {
      text: value,
      id: Math.random(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const completedTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const todosFilter = (index: number) => {
    if (index === 0) {
      setTodos(todos);
    } else if (index === 1) {
      setTodos(todos.filter((todos) => todos.completed === false));
    } else {
      setTodos(todos.filter((todos) => todos.completed === true));
    }
  };
  const editTodo = (id: number, text: string) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  };

  useEffect(() => {
    let count: number = 0;
    for (const todo of todos) {
      if (todo.completed === false) {
        count++;
      }
    }
    setCountTodo(count);
  }, [todos]);

  return (
    <div className={styles.todolist_container}>
      <TodosFilter todosFilter={todosFilter} />
      {todos.map((todo: Todos) => (
        <TodoItem
          key={todo.id}
          data={todo}
          deleteTodo={() => deleteTodo(todo.id)}
          completedTodo={() => completedTodo(todo.id)}
          editTodo={() => editTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
      <CountTodo count={countTodo} />
    </div>
  );
};

export default TodoList;
