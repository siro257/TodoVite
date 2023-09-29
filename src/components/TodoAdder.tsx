import React, { Dispatch, SetStateAction, useState } from "react";
import Todo from "./Todo";

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoAdder = ({ todos, setTodos }: Props) => {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <div className="input-group mb-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const updatedTodos: Todo[] = [
              ...todos,
              {
                id: todos.length + 1,
                todoText: todoText,
                completed: false,
              },
            ];
            setTodos(updatedTodos);
            setTodoText("");
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Your todo here..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default TodoAdder;
