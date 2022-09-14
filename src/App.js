import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [todosList, settodosList] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const [doneList, setdoneList] = useState([]);

  useEffect(() => {
    getTodosList();
    getDoneList();
    return () => {};
  }, []);

  const getTodosList = () => {
    settodosList([
      { text: "Buy Cofee", completed: false },
      { text: "Take children's from schoole", completed: false },
    ]);
  };
  const getDoneList = () => {
    setdoneList([
      { text: "15min Reading", completed: false },
      { text: "Going to doctor", completed: false },
    ]);
  };
  const handleAddTodo = () => {
    if (!newTodo) return;
    settodosList([...todosList, { text: newTodo, completed: false }]);
    setnewTodo("");
  };

  return (
    <div className="container">
      <Header />
      <AddTodo
        newTodo={newTodo}
        setnewTodo={setnewTodo}
        handleAddTodo={handleAddTodo}
      />
      <div className="todo-list-wrapper">
        <h2 className="title">Todos</h2>
        <div className="todo-list">
          <TodoList
            todosList={todosList}
            settodosList={settodosList}
            doneList={doneList}
            setdoneList={setdoneList}
          />
        </div>
        <h2 className="title">Completed</h2>
        <div className="todo-list completed">
          <TodoList
            todosList={todosList}
            settodosList={settodosList}
            doneList={doneList}
            setdoneList={setdoneList}
            isCompleted={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
