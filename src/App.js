import React, { useState } from 'react'
import { SortAndFilter, ToDoForm, ToDoTable } from './organisms';
import styled from 'styled-components';
import './style.css'

const Body = styled.div`
    width: 50vw;
    @media (max-width: 900px) {
        width: 75vw;
    }
    @media (max-width: 700px) {
        width: 90vw;
    }
`

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;  
    gap: 0.5rem;  
`

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
    const [status, setStatus] = useState('all');

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
        <Body>
            <h1>To Do or Not To Do?</h1>
            <Actions>
                <SortAndFilter todoList={todoList} setTodoList={setTodoList} isChronological={isChronological} setIsChonological={setIsChonological} status={status} setStatus={setStatus}/>
                <ToDoForm todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} isChronological={isChronological} /> 
            </Actions>
            <ToDoTable filteredTodos={filteredTodos} todoList={todoList} setTodoList={setTodoList} />
        </Body>
    )
}
