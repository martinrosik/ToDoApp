import { useState } from "react";

function Tasks() {
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div className="task-manager">
            <h1>Task Manager</h1>
            <h2 className="date">Today is: {date}</h2>
            <h4>Tasks you need to do:</h4>
            <ol className="tasks-list">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="task">{task}</span>
                        <button className="remove-button" onClick={() => removeTask(index)}>Delete</button>
                    </li>)}
            </ol>
            <div className="adding-task">
                <input className="input-task" type="text" value={newTask} placeholder="Enter your task" onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default Tasks;