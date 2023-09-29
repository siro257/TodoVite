import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";
import TodoAdder from "./components/TodoAdder";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="position-absolute top-50 start-50 translate-middle justify-content-center ">
      <div className="vstack gap-5">
        <h1>hi</h1>
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoAdder todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
