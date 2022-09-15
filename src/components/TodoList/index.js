import React, { useContext, useEffect, useState } from "react";
import { typeupdateTodos } from "../../context/strings";
import { TodosContext } from "../../context/todosContext";
import TodoItem from "../TodoItem";

const TodoList = ({}) => {
  const { state, dispatch } = useContext(TodosContext);
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    // First Load todos
    setTodosList([
      { text: "Buy Cofee", completed: false },
      { text: "Take children's from schoole", completed: false },
      { text: "15min Reading", completed: false },
      { text: "Going to doctor", completed: true },
    ]);

    return () => {};
  }, []);

  useEffect(() => {
    // First Load todos
    dispatch({
      type: typeupdateTodos,
      payload: todosList,
    });
    return () => {};
  }, [todosList]);

  return (
    <div className="todo-list-wrapper">
      <h2 className="title">To-do list</h2>
      <div className="todo-list">
        <ul className="list">
          {state?.todos?.map((item, index) => (
            <TodoItem item={item} isCompleted={item.completed} key={item.text + index}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
