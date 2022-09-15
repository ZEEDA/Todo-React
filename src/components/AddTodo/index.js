import React, { useContext, useState } from "react";
import { typeAddTodo } from "../../context/strings";
import { TodosContext } from "../../context/todosContext";

const AddTodo = () => {
  
  const [newTodo, setnewTodo] = useState("");
  const { dispatch } = useContext(TodosContext);
  
  const handleAddTodo = () => {
    if (!newTodo) return;
    dispatch({
      type: typeAddTodo,
      payload: { text: newTodo, completed: false },
    });
    setnewTodo("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="What's in your mind.."
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
      />
      <button className="add" onClick={handleAddTodo}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
