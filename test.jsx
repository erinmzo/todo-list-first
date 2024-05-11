{
  todos.map((el) => {
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
            <button
              onClick={() => {
                onIsDone(el.id);
              }}
            >
              완료
            </button>
          </span>
        </div>
      </li>
    );
  });
}
