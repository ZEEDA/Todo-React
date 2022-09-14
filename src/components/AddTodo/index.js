import React from "react";

const AddTodo = ({ newTodo, setnewTodo, handleAddTodo }) => {
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
