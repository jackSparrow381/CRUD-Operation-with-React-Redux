import { Button } from "@mui/material";
import React from "react";

export const TodoLists = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <span>{todo.title}</span>
          <Button
            sx={{
              marginLeft: "1rem",
            }}
            variant="contained"
            color="secondary"
            size="small"
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
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
