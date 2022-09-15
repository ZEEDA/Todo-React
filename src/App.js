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
    return () => {};
  }, []);

  const getTodosList = () => {
    settodosList([
      { text: "Buy Cofee", completed: false },
      { text: "Take children's from schoole", completed: false },
      { text: "15min Reading", completed: false },
      { text: "Going to doctor", completed: true },
    ]);
  };

  const handleAddTodo = () => {
    if (!newTodo) return;
    settodosList([{ text: newTodo, completed: false },...todosList]);
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
      <TodoList
        todosList={todosList}
        settodosList={settodosList}
        doneList={doneList}
        setdoneList={setdoneList}
      />
    </div>
  );
}

export default App;
