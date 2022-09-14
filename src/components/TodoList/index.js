import React, { useEffect } from "react";
import TodoItem from "../TodoItem";

const TodoList = ({
  todosList,
  settodosList,
  doneList,
  setdoneList,
  isCompleted,
}) => {
  const renderContent = () => {
    return isCompleted
      ? doneList?.map((item) => (
          <TodoItem
            todosList={todosList}
            settodosList={settodosList}
            doneList={doneList}
            setdoneList={setdoneList}
            item={item}
            isCompleted={true}
          />
        ))
      : todosList?.map((item) => (
          <TodoItem
            todosList={todosList}
            settodosList={settodosList}
            doneList={doneList}
            setdoneList={setdoneList}
            item={item}
          />
        ));
  };
  return <ul className="list">{renderContent()}</ul>;
};

export default TodoList;
