import { createContext, useReducer } from "react";
import {
  typeAddTodo,
  typeupdateTodos,
  typeRemoveTodo,
  typeCompleteTodo,
  typeUndoCompleteTodo,
} from "./strings";

export const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const INIT_STATE = {
    todos: [],
  };

  const todoReducer = (state, action) => {
    switch (action.type) {
      case typeupdateTodos:
        return {
          todos: action.payload,
        };
      case typeAddTodo:
        return {
          todos: [action.payload, ...state.todos],
        };
      case typeRemoveTodo:
        return {
          todos: state?.todos?.filter((i) => action.payload.text !== i.text),
        };
      case typeCompleteTodo:
        return {
          todos: [
            ...state?.todos?.filter((i) => action.payload.text !== i.text),
            { text: action.payload.text, completed: true },
          ],
        };
      case typeUndoCompleteTodo:
        return {
          todos: [
            { text: action.payload.text, completed: false },
            ...state?.todos?.filter((i) => action.payload.text !== i.text),
          ],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(todoReducer, INIT_STATE);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
