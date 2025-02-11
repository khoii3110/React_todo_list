import { useState } from "react";

export default function ToDOList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState();

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((element, i) => i !== index);
    setTasks(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <div className="todo-list">
      <h1>TODO LIST</h1>
      <div>
        <input
          type="text"
          placeholder="write your list..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button
              className="move-up-button"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="move-task-down"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
