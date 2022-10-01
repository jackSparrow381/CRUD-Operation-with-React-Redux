import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  UPDATE_TODO,
} from "../actions/Actions";

const inititalState = [];

export const TodoReducer = (State = inititalState, action) => {
  switch (action.type) {
    // Adding the todo item
    case ADD_TODO:
      const data = action.payload;
      return [...State, data];

    // deleting the todo item
    case REMOVE_TODO:
      const id = action.payload;
      const deleteItem = State.filter((todo) => todo.id !== id);
      return deleteItem;

    // editing the todo item
    case EDIT_TODO:
      const editId = action.payload;
      const editItem = State.filter((todo) => todo.id === editId);
      return editItem;

    // updating the todo item
    case UPDATE_TODO:
      return State.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo;
      });

    // if the action type is not matched then return the state
    default:
      return State;
  }
};
