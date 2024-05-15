function Card({
  id,
  contents,
  date,
  isDone,
  setTodos,
  setToggleModal,
  setClickedId,
}) {
  const onOpenModal = () => {
    setToggleModal((prev) => !prev);
    setClickedId(id);
  };

  const onDoneToggle = (clickedId) => {
    setTodos((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === clickedId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
      return newTodos;
    });
  };
  return (
    <li>
      {contents}
      <div>
        {date}
        <span className="btn-box">
          <button
            onClick={() => {
              onOpenModal(id);
            }}
          >
            삭제
          </button>
          {isDone === true ? (
            <button
              onClick={() => {
                onDoneToggle(id);
              }}
            >
              취소
            </button>
          ) : (
            <button
              onClick={() => {
                onDoneToggle(id);
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
