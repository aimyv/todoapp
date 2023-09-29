import React from 'react'
import './style.css'

export default function ToDoList({filteredTodos, todoList, setTodoList}) {
    return (
        <div class='border'>
            <ul>
                {
                    filteredTodos.map(todo => (
                        <li key={todo.id}>
                            {todo.id}: {todo.description} - {todo.priority} {todo.done ? '✅' : '❌'}
                            <button onClick={() => 
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
                            <button onClick={() => 
                                setTodoList(
                                    todoList.filter(i =>
                                        i.id !== todo.id
                                    )
                                )
                            }>
                                Delete
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}