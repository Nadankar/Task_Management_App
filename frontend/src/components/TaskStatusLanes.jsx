
import React, { useState } from "react";
import EditForm from "../pages/EditForm";

function TaskStatusLanes({ tasks, onDeleteTask, onUpdateTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId); 
  };

  const handleSaveTask = (updatedTask) => {
    onUpdateTask(updatedTask); 
    setEditingTaskId(null); 
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  // Filter tasks by status
  const toDoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-6 py-3">To Do</th>
              <th className="border border-gray-300 px-6 py-3">In Progress</th>
              <th className="border border-gray-300 px-6 py-3">Done</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Render To Do Tasks */}
              <td className="border border-gray-300 px-6 py-3 hover:bg-slate-100">
                {toDoTasks.map((task) => (
                  <div key={task._id} className="mb-2">
                    {editingTaskId === task._id ? (
                      <EditForm
                        task={task}
                        onSave={handleSaveTask}
                        onCancel={handleCancelEdit}
                      />
                    ) : (
                      <div className="flex justify-between">
                        <span>{task.title}</span>
                        <div className="flex space-x-2">
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => handleEditClick(task._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => onDeleteTask(task._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </td>

              {/* Render In Progress Tasks */}
              <td className="border border-gray-300 px-6 py-3 hover:bg-slate-100">
                {inProgressTasks.map((task) => (
                  <div key={task._id} className="mb-2">
                    {editingTaskId === task._id ? (
                      <EditForm
                        task={task}
                        onSave={handleSaveTask}
                        onCancel={handleCancelEdit}
                      />
                    ) : (
                      <div className="flex justify-between">
                        <span>{task.title}</span>
                        <div className="flex space-x-2">
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => handleEditClick(task._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => onDeleteTask(task._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </td>

              {/* Render Done Tasks */}
              <td className="border border-gray-300 px-6 py-3 hover:bg-slate-100">
                {doneTasks.map((task) => (
                  <div key={task._id} className="mb-2">
                    {editingTaskId === task._id ? (
                      <EditForm
                        task={task}
                        onSave={handleSaveTask}
                        onCancel={handleCancelEdit}
                      />
                    ) : (
                      <div className="flex justify-between">
                        <span>{task.title}</span>
                        <div className="flex space-x-2">
                          <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => handleEditClick(task._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => onDeleteTask(task._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskStatusLanes;


