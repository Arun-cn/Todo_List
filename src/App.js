import './styles/App.css';
import EditText from './components/TaskEdit';
import TodoItemCard from './components/TodoItemCard';
import { useState } from 'react';

function App() {
  const [toDo,setToDo]= useState([]);

  const handleSubmit = (newItem)=>{
    setToDo([...toDo,newItem]);
    
  }

  return (
    <div className="App">
       <h1>TODO LIST</h1>
       <div className='todoappcontiner'>
        <EditText onSubmit={handleSubmit} ></EditText>
        <div>
          {toDo.map((toDos , index)=>{
            
             return <TodoItemCard key={index} item={toDos.item}></TodoItemCard>
          })}
         
        </div>

       </div>
    </div>
  );
}

export default App;
