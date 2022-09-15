import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [todosList, settodosList] = useState([]);
  const [newTodo, setnewTodo] = useState("");
  const [doneList, setdoneList] = useState([]);

  return (
    <div className="container">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
