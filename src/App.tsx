import "./styles.css";
import React, { useState } from "react";
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = task;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask({ title: "", description: "", dueDate: "" });
  };
  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="task-manager">
      {" "}
      <h1>Personal Task Manager</h1>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
        />{" "}
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          required
        />{" "}
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />{" "}
        <button type="submit">
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>{" "}
      </form>{" "}
      <div className="task-list">
        {" "}
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            {" "}
            <h2>{task.title}</h2> <p>{task.description}</p>{" "}
            <p>Due Date: {task.dueDate}</p>{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default TaskManager;
