import React from 'react'

export default function SortAndFilter({todoList, setTodoList, isChronological, setIsChonological, setStatus}) {
    function handleStatus(e) {
        setStatus(e.target.value)
    }
    return (
        <div class='border'>
                <h2>Sort</h2>

                <button onClick={()  => {
                    const nextList = [...todoList];
                    nextList.reverse();
                    setTodoList(nextList);
                    setIsChonological(!isChronological);
                }}>
                    {isChronological ? 'Date Added 👈' : 'Date Added 👉'}
                </button>

                <br /><br />
                <h2>Filter</h2>
                <select onChange={handleStatus} className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>   
            </div>
    )
}
