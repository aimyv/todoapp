import React from 'react'
import './style.css'

export default function SortAndFilter({todoList, setTodoList, isChronological, setIsChonological, setStatus}) {
    function handleStatus(e) {
        setStatus(e.target.value)
    }
    return (
        <div className='border'>
                <button className='white control' onClick={()  => {
                    const nextList = [...todoList];
                    nextList.reverse();
                    setTodoList(nextList);
                    setIsChonological(!isChronological);
                }}>
                    {isChronological ? 'Date Added 👆' : 'Date Added 👇'}
                </button>
                <select onChange={handleStatus} className="control">
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
