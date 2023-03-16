import './styles/App.css';
import EditText from './components/TaskEdit';
import TodoItemCard from './components/TodoItemCard';
import { useState } from 'react';

function App() {
  const [toDos,setToDo]= useState([]);

  const handleSubmit = (newItem)=>{
    setToDo([...toDos,newItem]);
    
  }

  const todoItemDelete =(id) =>{
    setToDo(toDos.filter((item)=>{
     return item.id !==id;
    }));
  }

  const taskCompleted = (id)=>{
     setToDo(toDos.map((todo)=>{
      if (todo.id === id ) {
          return {...todo,completed: !todo.completed}
        };
      return todo;
     }));
    console.log(toDos)
  }

  return (
    <div className="App">
       <h1>TODO LIST</h1>
       <div className='todoappcontiner'>
        <EditText onSubmit={handleSubmit} ></EditText>   
        <div>
          {toDos.map((toDo)=>{
            
             return <TodoItemCard key={toDo.id} item={toDo.todo } complited={toDo.completed} itemId={toDo.id} onButtonClick={todoItemDelete} onCheck={taskCompleted}></TodoItemCard>
          })}
         
        </div>

       </div>
    </div>
  );
}

export default App;
