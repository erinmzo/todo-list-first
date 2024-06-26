import { useState } from "react";

function InputTodo({ todos, setTodos }) {
  const [value, setValue] = useState("");
  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmitTodo = (event) => {
    event.preventDefault();
    if (!value) {
      alert("내용을 입력해주세요.");
      return;
    }

    if (value.length > 30) {
      alert("30자 이내로 입력해주세요.");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      contents: value,
      date: `${new Date().getFullYear()}/${
        new Date().getMonth() + 1
      }/${new Date().getDate()}`,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setValue("");

    const setTodosData = [...todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(setTodosData));
  };
  return (
    <form onSubmit={onSubmitTodo}>
      <input
        type="text"
        value={value}
        onChange={onChangeValue}
        placeholder="Please enter your to-do."
      />
      <button type="submit">submit</button>
    </form>
  );
}
export default InputTodo;
