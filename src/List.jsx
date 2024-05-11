function List({ todos, setTodos }) {
  const onDeleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodo);
  };

  const onIsDone = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((el) => {
        return (
          <li key={el.id}>
            {el.contents}
            <div>
              {el.date}
              <span className="btn-box">
                <button
                  onClick={() => {
                    onDeleteTodo(el.id);
                  }}
                >
                  삭제
                </button>
                {el.isDone === true ? (
                  <button
                    onClick={() => {
                      onIsDone(el.id);
                    }}
                  >
                    취소
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onIsDone(el.id);
                    }}
                  >
                    완료
                  </button>
                )}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default List;
