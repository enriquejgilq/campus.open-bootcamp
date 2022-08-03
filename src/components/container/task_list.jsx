import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask = new Task('ejemplo', 'default descripcion', false, LEVELS.NORMAL)
    const changeState = (id)=>{
        console.log('id')
    }
    return (
        <div>
            <h1>
                Tu tarea :
            </h1>
            <TaskComponent task={defaultTask} />
        </div>
    );
};




export default TaskListComponent;
