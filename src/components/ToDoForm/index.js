import React from 'react'

let nextId = 0

export default function ToDoForm({todo, setTodo, todoList, setTodoList}) {

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div class='border'>
                <h2>Add a To-do</h2>
                <input placeholder='Write a todo' name='description' value={todo.description} onChange={handleChange} />

                <br /><br />

                <label for="priority">Choose a priority: </label>
                <select id="priority" name="priority" value={todo.priority} onChange={handleChange}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <br /><br />

                <button onClick={() => {
                    setTodoList([
                        { 
                            id: nextId++, description: todo.description, 
                            priority: todo.priority, 
                            done: todo.done 
                        },
                        ...todoList])
                }}>
                        Add
                </button>
            </div>
    )
}
