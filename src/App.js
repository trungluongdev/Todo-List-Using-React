import React, { useState } from 'react'

import "./App.css"
import Header from './components/Header'
import TaskList from './components/TaskList'
import ShowIncompletedTasks from './components/ShowIncompletedTasks'
import InputTask from './components/InputTask'


function App() {
    const [tasks, setTasks] = useState([
        { title: "Learn JS", id: 1, status: false },
        { title: "Code To-do list", id: 2, status: false }
    ])

    const [newTaskInput, setNewTaskInput] = useState("")

    const [showIncompletedTasks, setShowIncompletedTasks] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newTaskInput) {
            const task = {
                id: Date.now(),
                title: newTaskInput,
                status: 0
            }
            setTasks([...tasks, task])
            setNewTaskInput("")
        }
    }

    const handleInputChange = (e) => {
        setNewTaskInput(e.target.value)
    }

    const handleTaskStatus = (taskID, status) => {
        setTasks(tasks.map(task => {
            if (taskID === task.id) { return { ...task, status } }
            return task
        }
        ))
    }

    const handleRemoveTask = (taskID) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }

    return (
        <div className="container">
            <Header />
            <TaskList tasks={tasks} showIncompletedTasks={showIncompletedTasks} handleTaskStatus={handleTaskStatus} handleRemoveTask={handleRemoveTask} />
            <ShowIncompletedTasks showIncompletedTasks={showIncompletedTasks} setShowIncompletedTasks={setShowIncompletedTasks} />
            <InputTask newTaskInput={newTaskInput} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        </div>
    )
}

export default App