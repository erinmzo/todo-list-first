import "../style/Progress.css";

function Progress({ todos }) {
  const doneTodo = todos.filter((el) => el.isDone === true);
  const doneLatio = (doneTodo.length / todos.length).toFixed(2) * 100 || 0;

  return (
    <>
      <h2>🏃‍♀️ Progress</h2>
      <progress className="progress-box" value={doneLatio} max="100" />
    </>
  );
}
export default Progress;
