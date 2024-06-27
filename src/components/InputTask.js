import React from 'react'

function InputTask({ newTaskInput, handleSubmit, handleInputChange }) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="new-item">Add to the to-do list</label>
            <input type="text" id="new-item" value={newTaskInput} onChange={handleInputChange} />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default InputTask