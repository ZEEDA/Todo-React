import React from "react";

const TodoItem = ({
  item,
  todosList,
  settodosList,
  doneList,
  setdoneList,
  isCompleted,
}) => {
  const handleCompleteTask = (task) => {
    // Remove task from todo list
    const _todoList = todosList.filter((i) => task.text !== i.text);
    settodosList(_todoList);
    // Add task from Completed list
    setdoneList([...doneList, { text: task.text, completed: true }]);
  };

  const handleUndoComplete = (task) => {
    // Remove task from Completed list
    const _doneList = doneList.filter((i) => task.text !== i.text);
    setdoneList(_doneList);
    // Add task from todo list
    settodosList([...todosList, { text: task.text, completed: false }]);
  };

  return isCompleted ? (
    <li className="todo completed" key={item.text}>
      <span className="text">{item.text}</span>
      <span className="actions">
        <button className="icon check" onClick={() => handleUndoComplete(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
          >
            <path
              id="Icon_ionic-md-checkbox-outline"
              data-name="Icon ionic-md-checkbox-outline"
              d="M11.85,15.15l-2.1,2.1L16.5,24l15-15L29.4,6.9,16.5,19.725ZM28.5,28.5H7.5V7.5h15v-3H7.5a3.009,3.009,0,0,0-3,3v21a3.009,3.009,0,0,0,3,3h21a3.009,3.009,0,0,0,3-3v-12h-3Z"
              transform="translate(-4.5 -4.5)"
            />
          </svg>
        </button>
      </span>
    </li>
  ) : (
    <li className="todo" key={item.text}>
      <span className="text">{item.text}</span>
      <span className="actions">
        <button className="icon check" onClick={() => handleCompleteTask(item)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
          >
            <path
              id="Icon_material-check-box-outline-blank"
              data-name="Icon material-check-box-outline-blank"
              d="M28.5,7.5v21H7.5V7.5h21m0-3H7.5a3.009,3.009,0,0,0-3,3v21a3.009,3.009,0,0,0,3,3h21a3.009,3.009,0,0,0,3-3V7.5A3.009,3.009,0,0,0,28.5,4.5Z"
              transform="translate(-4.5 -4.5)"
            />
          </svg>
        </button>
        <button className="icon delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="27"
            viewBox="0 0 21 27"
          >
            <path
              id="Icon_material-delete-forever"
              data-name="Icon material-delete-forever"
              d="M9,28.5a3.009,3.009,0,0,0,3,3H24a3.009,3.009,0,0,0,3-3v-18H9Zm3.69-10.68L14.805,15.7,18,18.885l3.18-3.18L23.3,17.82,20.115,21l3.18,3.18L21.18,26.3,18,23.115,14.82,26.3,12.7,24.18,15.885,21ZM23.25,6l-1.5-1.5h-7.5L12.75,6H7.5V9h21V6Z"
              transform="translate(-7.5 -4.5)"
            />
          </svg>
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
