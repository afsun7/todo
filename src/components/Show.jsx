import { useState } from "react";

export default function Show({ todoList, setTodoList }) {
  const [isEdit, setIsEdit] = useState(null);
  const [editValue, setEditValue] = useState("");
  function handelDelete(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }
  function handelEdit(id) {
    setIsEdit(id);
  }
  function handelEditInput(e) {
    setEditValue(e.target.value);
  }
  function handelEditSave(id) {
    todoList.find((item) => {
      if (item.id === id && editValue != "") return (item.todo = editValue);
    });
    setTodoList([...todoList]);
    localStorage.setItem("todoItems", JSON.stringify([...todoList]));
    setEditValue("");
    setIsEdit(null);
  }
  function handelComplete(id) {
    todoList.find((item) => {
      if (item.id === id) return (item.isdoing = !item.isdoing);
    });
    setTodoList([...todoList]);
    localStorage.setItem("todoItems", JSON.stringify([...todoList]));
    console.log(todoList);
  }
  return (
    <>
      {todoList.length ? (
        todoList.map((item) => (
          <div className="show">
            <div onClick={() => handelComplete(item.id)}>
              {item.isdoing ? item.todo : <s>{item.todo}</s>}
            </div>
            {isEdit !== item.id ? (
              <div className="btn">
                <button onClick={() => handelDelete(item.id)}>
                  <img src="./public/icons8-remove-48.png" />
                </button>
                <button onClick={() => handelEdit(item.id)}>
                  <img src="./public/icons8-pencil-64.png" />
                </button>
              </div>
            ) : (
              <div className="edit-div">
                <input
                  type="text"
                  name={isEdit}
                  onChange={handelEditInput}
                  value={editValue}
                ></input>
                <button onClick={() => handelEditSave(item.id)}>
                  editSave
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <h2>No Task:</h2>
      )}
    </>
  );
}
