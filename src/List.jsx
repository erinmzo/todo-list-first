function List({ todos, setTodos, modal, setModal }) {
  const onModal = () => {
    setModal((prev) => !prev);
  };
  const onDeleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    onModal();
    modal ? setTodos(filteredTodo) : null;
  };

  const onIsDone = (id) => {
    const answer = confirm("완료하시겠습니까?");
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    answer ? setTodos(newTodos) : null;
  };

  const onIsCancel = (id) => {
    const answer = confirm("취소하시겠습니까?");
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    answer ? setTodos(newTodos) : null;
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
                      onIsCancel(el.id);
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
