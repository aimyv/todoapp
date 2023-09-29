import React, { useState } from 'react'
import { SortAndFilter, ToDoForm, ToDoList } from './components';
import './style.css'

let nextId = 0

export default function App() {
    const [todo, setTodo] = useState({
        id: nextId,
        description: '',
        priority: 'medium',
        done: false
    })
    const [todoList, setTodoList] = useState([])
    const [isChronological, setIsChonological] = useState(false)
    const [status, setStatus] = useState('');

    function filterHandler() {
        if (status === 'completed') {
            return todoList.filter(todo => todo.done)
        } else if (status === 'uncompleted') {
            return todoList.filter(todo => !todo.done)
        } else if (status === 'high') {
            return todoList.filter(todo => todo.priority === 'high')
        } else if (status === 'medium') {
            return todoList.filter(todo => todo.priority === 'medium')
        } else if (status === 'low') {
            return todoList.filter(todo => todo.priority === 'low')
        } else {
            return todoList
        }
    }

    const filteredTodos = filterHandler()

    return (
        <div className='app'>
          <div>
            <h1><span id='underline'>To Do</span> or <span id='throughline'>Not</span> To Do?</h1>
            <br />
            <SortAndFilter todoList={todoList} setTodoList={setTodoList} isChronological={isChronological} setIsChonological={setIsChonological} setStatus={setStatus}/>
            <ToDoList filteredTodos={filteredTodos} todoList={todoList} setTodoList={setTodoList} />
          </div>
            <ToDoForm todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />      
        </div>
    )
}
