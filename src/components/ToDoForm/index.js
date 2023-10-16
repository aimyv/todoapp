import React from 'react'
import './style.css'

let nextId = 0

export default function ToDoForm({todo, setTodo, todoList, setTodoList}) {

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='form'>
            <input placeholder='Write a todo' name='description' value={todo.description} onChange={handleChange} />
            <select id="priority" name="priority" value={todo.priority} onChange={handleChange}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button className='green' onClick={() => {
                setTodoList([
                    { 
                        id: nextId++, description: todo.description, 
                        priority: todo.priority, 
                        done: todo.done 
                    },
                    ...todoList])
            }}>
                    Add To-Do ＋
            </button>
        </div>
    )
}
