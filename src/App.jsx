import Input from "./components/Input";
import { useState } from "react";
import Show from "./components/Show";
import "/src/assets/style.css";

function App() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoItems")
      ? JSON.parse(localStorage.getItem("todoItems"))
      : []
  );
  return (
    <div id="container">
      <h1 className="text">Todo List</h1>
      <Input todoList={todoList} setTodoList={setTodoList} />
      <Show todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
export default App;
