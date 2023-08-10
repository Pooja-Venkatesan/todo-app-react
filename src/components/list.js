import React from 'react';

import '../App.css';

const TaskList= ({name})=>{
    return(
        <div className='taskList'>
        <input type='checkbox'/>
        {name}
      </div>
    );
}

export default TaskList;