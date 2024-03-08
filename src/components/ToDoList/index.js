import React from 'react'
import './style.css'
import { FiTrash2, FiCheck } from "react-icons/fi";
import { MdOutlineUndo } from "react-icons/md"

export default function ToDoList({ filteredTodos, todoList, setTodoList }) {
    return (
        <div className='border'>
            <ul>
                {
                    filteredTodos.map(todo => (
                        <li key={todo.id} className={`${todo.done}`}>
                            <div className='info'>
                                {todo.description}
                                <div className={`chip ${todo.priority}`}>{todo.priority}</div>
                            </div>
                            <div className='buttons'>
                                <button id='done' className={`half ${!todo.done ? 'complete' : 'undo'}`} onClick={() =>
                                    setTodoList(todoList.map((el) => {
                                        if (todo.id === el.id) {
                                            return {
                                                ...el, done: !todo.done
                                            }
                                        }
                                        return el
                                    }))
                                }>
                                    {!todo.done ? <FiCheck /> : <MdOutlineUndo />}
                                    {!todo.done ? 'Done ' : 'Undo '}
                                </button>
                                <button id='delete' className='half' onClick={() =>
                                    setTodoList(
                                        todoList.filter(i =>
                                            i.id !== todo.id
                                        )
                                    )
                                }>
                                    <FiTrash2 />Delete
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
