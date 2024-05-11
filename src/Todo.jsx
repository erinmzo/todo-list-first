import { useState } from "react";
import List from "./List";
function Todo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      contents: event.target[0].value,
      date: `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`,
      isDone: false,
    };
    if (!newTodo.contents) {
      alert("내용을 입력해주세요.");
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
        <div>
          <h2>🔥 TODO</h2>
          <div>
            {todos.map((todo) => {
              if (!todo.isDone) {
                return <List key={todo.id} todos={todos} setTodos={setTodos} />;
              }
            })}
          </div>
          <h2>😎 DONE</h2>
          <div>
            {todos.map((todo) => {
              if (todo.isDone) {
                return <List key={todo.id} todos={todos} setTodos={setTodos} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Todo;
