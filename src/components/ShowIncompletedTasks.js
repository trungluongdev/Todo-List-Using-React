import React from 'react'

function ShowIncompletedTasks({ showIncompletedTasks, setShowIncompletedTasks }) {
    return (
        <div className="filter-wrapper">
            <label htmlFor="filter" className="filter-label">Show incompleted task only</label>
            <input type="checkbox" id="filter" checked={showIncompletedTasks} onChange={(e) => setShowIncompletedTasks(e.target.checked)} />
        </div>
    )
}

export default ShowIncompletedTasks