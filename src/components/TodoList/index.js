import React, { useEffect } from "react";
import TodoItem from "../TodoItem";

const TodoList = ({
  todosList,
  settodosList,
  doneList,
  setdoneList,
}) => {
  return (
    <div className="todo-list-wrapper">
      <h2 className="title">To-do list</h2>
      <div className="todo-list">
        <ul className="list">
          {todosList?.map((item) => (
            <TodoItem
              todosList={todosList}
              settodosList={settodosList}
              doneList={doneList}
              setdoneList={setdoneList}
              item={item}
              isCompleted={item.completed}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
