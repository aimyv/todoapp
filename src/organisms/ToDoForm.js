import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import styled from 'styled-components'
import Modal from './Modal'

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
`

const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    @media (max-width: 500px) {
        flex-direction: column;
        button, select, input {
            width: 100%;
        }
    }
`

let nextId = 0

export default function ToDoForm({ todo, setTodo, todoList, setTodoList, isChronological }) {
    const [open, setOpen] = useState(false);

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Button className='primary' onClick={() => setOpen(true)}>
                <Plus size={15} /> 
                Add To-Do
            </Button>
            <Modal
                open={open}
                setOpen={setOpen}
                title='Add New To-Do'
            >
            <Form>
                <input placeholder='Write a todo' name='description' value={todo.description} onChange={handleChange} />
                <select id="priority" name="priority" value={todo.priority} onChange={handleChange}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <Button id='submit' className='primary' onClick={() => {
                    const newTodo = {
                        id: nextId++, description: todo.description,
                        priority: todo.priority,
                        done: todo.done
                    }
                    isChronological ? setTodoList([...todoList, newTodo]) : setTodoList([newTodo, ...todoList])
                    setOpen(false)
                }}>
                    <Plus size={15} /> 
                    Add To-Do
                </Button>
            </Form>
            </Modal>
        </>
    )
}
