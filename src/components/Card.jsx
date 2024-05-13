function Card({
  id,
  contents,
  date,
  isDone,
  setTodos,
  setToggleModal,
  setClickedId,
}) {
  const onDeleteTodo = () => {
    setToggleModal((prev) => !prev);
    setClickedId(id);
  };

  const onToggle = (doneId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === doneId) {
          todo.isDone = !isDone;
        }
        return todo;
      })
    );
  };
  return (
    <li>
      {contents}
      <div>
        {date}
        <span className="btn-box">
          <button
            onClick={() => {
              onDeleteTodo(id);
            }}
          >
            삭제
          </button>
          {isDone === true ? (
            <button
              onClick={() => {
                onToggle(id);
              }}
            >
              취소
            </button>
          ) : (
            <button
              onClick={() => {
                onToggle(id);
              }}
            >
              완료
            </button>
          )}
        </span>
      </div>
    </li>
  );
}
export default Card;
