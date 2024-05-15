import Card from "./Card";

function PaintTodo({ todos, setTodos, setToggleModal, setClickedId }) {
  return (
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
                  setToggleModal={setToggleModal}
                  setClickedId={setClickedId}
                />
              );
            }
          })}
        </ul>
      </div>
      <h2>😎 DONE</h2>
      <div className="done">
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
                  setToggleModal={setToggleModal}
                  setClickedId={setClickedId}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default PaintTodo;
