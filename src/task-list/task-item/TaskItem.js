import React from 'react';

const TaskItem = (p) => {
    const {id, name, isImportant} = p;

    const delHandler = () =>{
        console.log(id,name)
    }
    return (
        <div style={{border:'1px solid red', margin:'20px', padding:'20px', background:'cyan'}}>
            <p>isImportant:{isImportant.toString()}</p>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <div>
                <button onClick={delHandler}>del</button>
                <button>toggle item</button>
            </div>
        </div>
    );
};

export default TaskItem;