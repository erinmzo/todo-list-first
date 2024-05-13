import Todo from "./components/Todo";
import "./style/App.css";
function App() {
  return (
    <>
      <header id="header">
        <div className="container">
          <h1>
            <img src="/src/assets/todolist.png" />
            Minsoo&apos;s To-Do
          </h1>
        </div>
      </header>
      <main id="main">
        <div className="container">
          <Todo />
        </div>
      </main>
    </>
  );
}

export default App;
