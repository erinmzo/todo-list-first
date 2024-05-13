import { useState } from "react";
import InputTodo from "./InputTodo";
import Modal from "./Modal";
import PaintTodo from "./PaintTodo";
import Progress from "./Progress";

function Todo() {
  const data = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(data);
  const [modal, setToggleModal] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  return (
    <>
      <div className="todo-box">
        <InputTodo todos={todos} setTodos={setTodos} />
        <Progress todos={todos} />
        <PaintTodo
          todos={todos}
          setTodos={setTodos}
          setToggleModal={setToggleModal}
          setClickedId={setClickedId}
        />
      </div>
      {modal && (
        <Modal
          setToggleModal={setToggleModal}
          setTodos={setTodos}
          clickedId={clickedId}
        />
      )}
    </>
  );
}
export default Todo;
