import React from "react";
import { TodoForm } from "./TodoForm";
import { TodoLists } from "./TodoLists";

export const TodoManagement = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo Management</h1>
      <TodoForm addTodo={(todo) => addTodo(todo)} />
      <TodoLists todos={todos} />
    </div>
  );
};
