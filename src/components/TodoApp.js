import React, { useState } from "react";
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className="app  ">
        <h1 className="todoh topmargin">Todo App Using React.JS</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter Anything"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="m-3" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="todoli">
              {task}
              <span onClick={() => removeTask(index)}>
                <i
                  className="fa-solid fa-trash-can fa-2xl"
                  style={{ color: "#c63410" }}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoApp;
