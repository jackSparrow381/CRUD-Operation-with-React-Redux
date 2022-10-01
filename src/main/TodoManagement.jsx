import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "../actions/Actions";
import { TodoForm } from "./TodoForm";
import { TodoLists } from "./TodoLists";

export const TodoManagement = () => {
  const todos = useSelector((state) => state.TodoReducer);

  const dispatch = useDispatch();

  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  const editTodo = (editId) => {
    console.log(editId);
    dispatch({ type: EDIT_TODO, payload: editId });
  };

  return (
    <div>
      <h1>Todo Management</h1>
      <TodoForm addTodo={(todo) => addTodo(todo)} />
      <TodoLists
        todos={todos}
        onDelete={(id) => deleteTodo(id)}
        onEdit={(id) => editTodo(id)}
      />
    </div>
  );
};
