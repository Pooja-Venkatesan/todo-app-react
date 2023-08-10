import { useState } from 'react';
import TodoForm from './components/todo';
import TaskList from './components/list'

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask(name){
    setTasks(prev =>{
      return [...prev, {name:name, done:false}];
    });
  }
    return (
    <div className="App">
      <TodoForm onAdd={addTask}/>
      {/* <TaskList /> */}
      {
      tasks.map(task=>(
        <TaskList {...task}/>
      ))}  
   
    </div>
  );
}

export default App;
