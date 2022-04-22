import { useState } from "react";
import "./App.css";
import TodoItem, { Todo } from "./TodoItem";
import Filter, { FilterType } from "./Filter";

const initialTodos: Todo[] = [
  { id: 1, text: "Task AAA", checked: true },
  { id: 2, text: "Task BBB", checked: false },
  { id: 3, text: "Task CCC", checked: false },
];

const DEFAULT_FILTER_TYPE = "all";

function App() {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>(DEFAULT_FILTER_TYPE);

  const handleOnSubmit = () => {
    if (!text) {
      setInputError("Please enter your todo");
      return;
    }

    setTodoList(
      todoList.concat({ id: todoList.length + 1, text, checked: false }),
    );

    setText("");
    setInputError("");
  };

  const onCheckTodo = (todoId: number) => {
    const checkTodo = todoList.find(({ id }) => id === todoId);
    if (!checkTodo) throw new Error("Not found check todo");

    checkTodo.checked = !checkTodo.checked;

    const mergedTodoList = todoList.map((todo) => {
      if (todo.id === checkTodo.id) {
        return checkTodo;
      }

      return todo;
    });

    setTodoList(mergedTodoList);
  };

  const isShowTodo = (todo: Todo, filter: FilterType): boolean => {
    return filter === "all" || (filter === "active" && !todo.checked) ||
      filter === "completed" && todo.checked;
  };

  return (
    <div className="container">
      <h1>Your TODO</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {inputError && <p style={{ color: "red" }}>{inputError}</p>}
        <button type="submit">Add</button>
      </form>
      <div style={{ padding: 16 }}>
        {todoList.map((todo, index) => {
          if (isShowTodo(todo, filter)) {
            return (
              <TodoItem todo={todo} onCheckTodo={onCheckTodo} key={index} />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
