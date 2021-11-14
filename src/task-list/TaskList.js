import React from 'react';
import TaskItem from "./task-item/TaskItem";
 const TaskList = ({tasks}) => {

    return (
        <div>
            {
                tasks.map((task)=><TaskItem key={task.id} {...task}/>
                )
            }
        </div>
    );
};

export default TaskList;