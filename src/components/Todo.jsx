import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import Progress from "./Progress";

function Todo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setToggleModal] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      contents: value,
      date: `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`,
      isDone: false,
    };
    if (!newTodo.contents) {
      alert("내용을 입력해주세요.");
    } else if (newTodo.contents.length > 30) {
      alert("30자 이내로 입력해주세요.");
    } else {
      setTodos((prev) => [...prev, newTodo]);
      setValue("");
    }
  };

  return (
    <>
      <div className="todo-box">
        <form onSubmit={onSubmitTodo}>
          <input type="text" value={value} onChange={onChangeValue} />
          <button type="submit">완료</button>
        </form>
        <Progress todos={todos} />
        <div className="todo-cont">
          <h2>🔥 TODO</h2>
          <div>
            <ul>
              {todos.map((todo) => {
                if (!todo.isDone) {
                  return (
                    <Card
                      key={todo.id}
                      id={todo.id}
                      contents={todo.contents}
                      date={todo.date}
                      isDone={todo.isDone}
                      setTodos={setTodos}
                      modal={modal}
                      setToggleModal={setToggleModal}
                      setClickedId={setClickedId}
                    />
                  );
                }
              })}
            </ul>
          </div>
          <h2>😎 DONE</h2>
          <div>
            <ul>
              {todos.map((todo) => {
                if (todo.isDone) {
                  return (
                    <Card
                      key={todo.id}
                      id={todo.id}
                      contents={todo.contents}
                      date={todo.date}
                      isDone={todo.isDone}
                      setTodos={setTodos}
                      modal={modal}
                      setToggleModal={setToggleModal}
                      setClickedId={setClickedId}
                    />
                  );
                }
              })}
            </ul>
          </div>
        </div>
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
