import React from "react";
import './App.css';
import TaskList from "./task-list/TaskList";
import Controlbar from "./control-bar/Controlbar";
 export function App(p) {
     const tasks = [
         {id:1,
         name: 'name1',
         isImportant: true
         },
         {id:2,
         name:'name2',
         isImportant:false
         },
         {id:3,
         name:'name3',
         isImportant: true
         }
     ]
  return (
    <div >
        <Controlbar/>
<TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
