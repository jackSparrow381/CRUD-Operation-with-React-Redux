import { Button, Input } from "@mui/material";
import React from "react";

export const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = React.useState("");

  const handleTitleChange = () => {
    addTodo({
      id: Math.floor(Math.random() * 1000),
      title: title,
    });
    setTitle("");
  };

  return (
    <div>
      <Input
        value={title}
        sx={{
          width: "auto",
          marginBottom: "1rem",
        }}
        placeholder="Add a new todo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        sx={{
          width: "auto",
          marginBottom: "1rem",
        }}
        variant="contained"
        onClick={handleTitleChange}
      >
        Add
      </Button>
    </div>
  );
};
