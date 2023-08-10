import { useState } from 'react';
import React, { useEffect } from 'react';
import '../App.css';


const TodoForm = ({onAdd})=>{
    const[taskName, setTaskName] = useState('');

    const handleSubmit= (e)=>{
        if(taskName===''){
            alert("Enter a task!");
        }
        else{
            e.preventDefault();
            onAdd(taskName);
            setTaskName('');
        }
        console.log(taskName);
        
    }
    return(
        <>
            <header className="App-header">
                <h1>TODO APP</h1>
            </header>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input type='text' 
                className='todo-input' 
                placeholder='Enter your task' 
                value={taskName} 
                onChange={(e)=> setTaskName(e.target.value)}/>
                <button type='submit' className='todo-btn'>Add</button>
            </form>
        </>
    );
    
}

export default TodoForm;