import Todo from "./components/Todo";
import "./style/App.css";
function App() {
  return (
    <>
      <header id="header">
        <div className="container">
          <h1>🤓 Task to Easy</h1>
        </div>
      </header>
      <main id="main">
        <div className="container">
          <Todo />
        </div>
      </main>
      <footer id="footer">copyrigntⒸzomins</footer>
    </>
  );
}

export default App;
