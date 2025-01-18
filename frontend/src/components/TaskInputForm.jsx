import React, { useState } from "react";

function TaskInputForm({ onTaskAdded }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: status,
    };

    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),  
      });
      
      console.log('Response:', response); 
 
      if (response.ok) {
        const savedTask = await response.json();
        onTaskAdded(savedTask); 
        setTaskTitle("");
        setTaskDescription("");
        setStatus("To Do");
      } else {
        console.error("Failed to save task to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="items-center px-20 py-10 border-2 rounded-xl shadow-sm">
        <h1 className="text-xl text-gray-800 font-medium mb-5">Task Input Form:</h1>
        <label htmlFor="task">Task Title:</label><br />
        <input
          type="text"
          id="task"
          placeholder="Add new task"
          className="border-2 p-2"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="description">Task Description:</label><br />
        <textarea
          id="description"
          placeholder="Write description about the task"
          className="border-2 p-2"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          required
        ></textarea><br /><br />

        <label htmlFor="status">Status</label><br />
        <select
          id="status"
          className="border-2 p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select><br /><br />

        <button type="submit" className="bg-pink-600 hover:bg-pink-500 rounded-lg text-white p-2 mt-6">
          Add new task
        </button>
      </form>
    </div>
  );
}

export default TaskInputForm;
