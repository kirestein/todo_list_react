import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [tarefa, setTarefa] = useState({ description: '', list: [] })
    const [update, setUpdate] = useState('')

    

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    });

    const handleChange = e => {
        setInput(e.target.value);
        setTarefa({ ...useState, description: e.target.value })
    };

    const handleAdd = () => {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => console.log('Funcionou!'))
    }
    

    
    const handleChangeUpdate = e => {
        setInput(e.target.value);
        setUpdate(e.target.value);
    }

    const updateTodo = () => {
        axios.put(URL, { newTodo: update, oldTodo: tarefa })
    }

    const sendTodo = () => {
        axios.post(URL, { tarefa: tarefa })
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
                        onChange={[handleChange, handleAdd]}
                        ref={inputRef}
                    />
                    <button className='todo-button' onClick={handleAdd}>Add Todo</button>
                </>
            )
            }

        </form>
    )
}

export default TodoForm

