import React, { useState } from "react";

function EditForm({ task, onSave, onCancel }) {
    
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveClick = () => {
        onSave(editedTask); 
    };

    return (
        <div className="border p-4 bg-gray-50 rounded-md">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    name="title"
                    value={editedTask.title}
                    onChange={handleInputChange}
                    className="border rounded w-full p-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={editedTask.description}
                    onChange={handleInputChange}
                    className="border rounded w-full p-2"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                    name="status"
                    value={editedTask.status}
                    onChange={handleInputChange}
                    className="border rounded w-full p-2"
                >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={handleSaveClick}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Save
                </button>
                <button
                    onClick={onCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default EditForm;
