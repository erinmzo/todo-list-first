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

  const onDoneToggle = (clikedId) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        return todo.id === clikedId ? { ...todo, isDone: !isDone } : todo;
      });
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
