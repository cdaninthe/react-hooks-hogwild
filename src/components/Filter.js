import React from "react";

function Filter ({onGreasedClick, onCategoryChange}) {
    return (
        <div>
            <h1>Filter</h1>
            <button onClick={onGreasedClick}>
                Show greased only
            </button>
            <br />
            <select name="category" onChange={onCategoryChange}>
                <option value="All">Sort hogs by...</option>
                <option value="Name">name</option>
                <option value="Weight">weight</option>
            </select>
        </div>
    )
}

export default Filter;