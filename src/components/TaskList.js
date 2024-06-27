import React from 'react'
import ListItem from './ListItem'

function TaskList({ tasks, showIncompletedTasks, handleTaskStatus, handleRemoveTask }) {
    return (
        <ul className="task-list">
            {tasks.filter(task => showIncompletedTasks ? task.status !== true : true).map(
                task =>
                    <ListItem task={task} handleTaskStatus={handleTaskStatus} handleRemoveTask={handleRemoveTask} />
            )}
        </ul>
    )
}

export default TaskList