import { useState } from "react";

function InputTodo({ todos, setTodos }) {
  const [value, setValue] = useState("");
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

    const setTodosData = [...todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(setTodosData));
  };
  return (
    <form onSubmit={onSubmitTodo}>
      <input type="text" value={value} onChange={onChangeValue} />
      <button type="submit">완료</button>
    </form>
  );
}
export default InputTodo;
