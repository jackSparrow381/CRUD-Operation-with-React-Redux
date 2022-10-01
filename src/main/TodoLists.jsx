import { Button } from "@mui/material";
import React from "react";

export const TodoLists = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <span>{todo.name}</span>
          <Button
            sx={{
              marginLeft: "1rem",
            }}
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => onEdit(todo.id)}
          >
            Edit
          </Button>

          <Button
            sx={{
              marginLeft: "1rem",
            }}
            variant="contained"
            color="error"
            size="small"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
