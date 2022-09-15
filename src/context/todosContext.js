import { createContext, useReducer } from "react";
import { typeAddTodo } from "./strings";

const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const INIT_STATE = {
    todos: [],
  };

  const todoReducer = (state, actoin) => {
    switch (action.type) {
      case typeAddTodo:
        return {
          todos: [...state.todos, action.newTodo],
        };
      case typeRemoveTodo:
        return {
          todos: [...action.newList],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(todoReducer, INIT_STATE);

  return <TodosContext.Provider value={{state, dispatch}}>{children}</TodosContext.Provider>;
};
