
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import TaskInputForm from './components/TaskInputForm.jsx';
import TaskStatusLanes from './components/TaskStatusLanes.jsx';

function App() {
    const [tasks, setTasks] = useState([]);

    //fetch task from the backend when new task is added
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('http://localhost:3000/task');
                if (response.ok) {
                    const fetchedTasks = await response.json();
                    setTasks(fetchedTasks);
                } else {
                    console.error('Failed to fetch tasks');
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        fetchTasks();
    }, []);

    const handleTaskAdded = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    //task deletion 
    const handleDeleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:3000/task/${taskId}`, {
                method: "DELETE"
            })

            if (response.ok) {
                setTasks((preTasks) => preTasks.filter((task) => task._id != taskId));
            } else {
                console.error("Error deleting task", error)
            }
        } catch (error) {

        }
    }

    // task update
    const handleUpdateTask = async (updatedTask) => {
        try {
            const response = await fetch(`http://localhost:3000/task/${updatedTask._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
            });
    
            if (response.ok) {
                const task = await response.json();
                setTasks((prevTasks) =>
                    prevTasks.map((task) =>
                        task._id === updatedTask._id ? updatedTask : task
                    )
                );
            } else {
                const errorData = await response.json();
                console.error("Error updating task:", errorData.error || "Failed to update task");
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    

  

    return (
        <>
            <div>
                <Header />
                <TaskInputForm onTaskAdded={handleTaskAdded} />
                <TaskStatusLanes tasks={tasks} onDeleteTask={handleDeleteTask} onUpdateTask={handleUpdateTask} />
            </div>
        </>
    );
}

export default App;








