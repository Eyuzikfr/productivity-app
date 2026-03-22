import "./css/App.css";
import "./css/index.css";
import Navbar from "./components/Navbar.jsx";
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
    setTaskDeadline("");
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
      <header className="header">
        <h1>Todo App</h1>
        <Navbar></Navbar>
      </header>

      <main>
        {/* Input Section */}
        <div className="input-section">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <label htmlFor="deadline" className="deadline-label">
            Set Date:
            <input
              id="deadline"
              type="date"
              value={taskDeadline}
              onChange={(e) => setTaskDeadline(e.target.value)}
            />
          </label>
          <button className="add-btn" onClick={addTodo}>
            Add
          </button>
        </div>

        {/* Display Tasks */}
        <div className="todo-section">
          <h2>Todo List</h2>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index}>
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>

                <div className="action-btns">
                  <span className="deadline">
                    {todo.deadline || "No deadline"}
                  </span>
                  <button
                    className="mark-completed-btn"
                    onClick={() => toggleCompleted(index)}
                    style={{
                      backgroundColor: todo.completed ? "#007bff" : "#28a745",
                    }}
                  >
                    {todo.completed ? "Undo" : "Done"}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTodo(index)}
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
