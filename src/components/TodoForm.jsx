import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [tarefa, setTarefa] = useState('')
    const [update, setUpdate] = useState('')

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
        setTarefa(e.target.value);
        

    };

    const handleChangeUpdate = e => {
        setInput(e.target.value);
        setUpdate(e.target.value);
    }

    const updateTodo = () => {
        axios.put('http://localhost:3001/todo-list-put', { newTodo: update, oldTodo: tarefa })
    }

    const sendTodo = () => {
        axios.post('http://localhost:3001/todo-list', { tarefa: tarefa })
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder='Update your item'
                        value={input}
                        name="text"
                        className='todo-input edit'
                        onChange={handleChangeUpdate}
                        ref={inputRef}
                    />
                    <button className='todo-button edit' onClick={updateTodo}>Update</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder='Add a ToDo'
                        value={input}
                        name="text"
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button' onClick={sendTodo}>Add Todo</button>
                </>
            )
            }

        </form>
    )
}

export default TodoForm