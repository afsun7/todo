import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function Input({ todoList, setTodoList }) {
  const [Input, setInput] = useState("");
  function handelInput(e) {
    
    setInput(e.target.value);
    console.log(Input);
  }
  function handelAddClick() {
    console.log(todoList.length);
    const objTodo = {
      todo: Input,
      isdoing: true,
      id: Math.floor(Math.random() * 10000),
    };
    if (Input !== "") {
      setTodoList([...todoList, objTodo]);
      localStorage.setItem("todoItems", JSON.stringify([...todoList]));
    }

    setInput("");
  }
  return (
    <div className="container-add">
      <input
        onChange={handelInput}
        value={Input}
        className="input-addTask"
      ></input>
      <button onClick={handelAddClick} className="btn-addTask">
        <PlusCircleOutlined />
      </button>
    </div>
  );
}
