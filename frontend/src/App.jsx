import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskDeadline, setTaskDeadline] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([
      ...todos,
      { text: task, completed: false, deadline: taskDeadline },
    ]);
    setTask("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const toggleCompleted = (indexToToggle) => {
    setTodos(
      todos.map((todo, index) =>
        index === indexToToggle
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <input
        type="date"
        value={taskDeadline}
        onChange={(e) => setTaskDeadline(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text} - {todo.deadline || "No deadline"}
            <button onClick={() => toggleCompleted(index)}>
              Mark As {todo.completed ? "Incomplete" : "Completed"}
            </button>
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
