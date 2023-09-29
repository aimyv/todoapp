import React from 'react'
import './style.css'

export default function ToDoList({filteredTodos, todoList, setTodoList}) {
    return (
        <div class='border'>
            <ul>
                {
                    filteredTodos.map(todo => (
                        <li key={todo.id} className={`${todo.done}`}>
                            {todo.description} 
                            <br />
                            ({todo.priority.charAt(0).toUpperCase()+todo.priority.slice(1)})
                            <div className='buttons'>
                                <button className='half' onClick={() => 
                                setTodoList(todoList.map((el) => {
                                    if (todo.id === el.id) {
                                        return { 
                                            ...el, done: !todo.done
                                        }
                                    }
                                    return el
                                    }))
                            }>
                                {!todo.done ? 'Complete' : 'Undo'}
                            </button>
                            <button className='half' onClick={() => 
                                setTodoList(
                                    todoList.filter(i =>
                                        i.id !== todo.id
                                    )
                                )
                            }>
                                Delete
                            </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
