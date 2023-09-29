import { Dispatch, SetStateAction, useState } from "react";
import Todo from "./Todo";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="justify-content-center">
      {todos.length === 0 && <p>Empty Todo!</p>}
      <ul className="list-group mx-auto ">
        {todos.map((todo, idx) => (
          <li
            className="list-group-item"
            style={
              todo.completed
                ? { textDecoration: "line-through", background: "#d3d3d3" }
                : {}
            }
            key={idx}
            onClick={() => {
              todo.completed = !todo.completed;
              const newTodos = todos.map((existingTodo) =>
                existingTodo.id === todo.id ? todo : existingTodo
              );
              setTodos(newTodos);
            }}
          >
            {todo.todoText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
