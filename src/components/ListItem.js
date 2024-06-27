import React from 'react'

function ListItem({ task, handleTaskStatus, handleRemoveTask }) {
    return (
        <li key={task.id} className={task.status ? "done" : ""}>
            <span className="lable">{task.title}</span>
            <div className="action">
                <input type="checkbox" className="btn-action btn-action-done" checked={task.status} onChange={(e) => handleTaskStatus(task.id, e.target.checked)} />
                <button className="btn-action btn-action-delete" onClick={(e) => handleRemoveTask(task.id)} >&#10008;</button>
            </div>
        </li>
    )
}

export default ListItem