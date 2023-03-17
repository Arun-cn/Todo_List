import '../styles/todoitemcard.css';
import { useState } from 'react';

function TodoItemCard (props){
    const [isChecked, setIsChecked] = useState(props.completed);
    const handleDelete= (e)=>{
        const id = props.itemId;
       props.onButtonClick(id);
    }

    const handleCompleted = (e)=>{
  
        props.onCheck(props.itemId)
        setIsChecked(!isChecked);
    }


    return(
        <div className='cardcontiner'>
            <div className='cardleftside'>
                <input type="checkbox" checked={isChecked} name="isDone" id="checker" onChange={handleCompleted}/>
                <label style={{ textDecoration: isChecked ? 'line-through' : 'none' }} className='todo-text' >{props.item} </label>
            </div>
            
            <div className='cardrightside'>
                <button className='carddeletebutton' onClick={handleDelete} >Delete</button>
            </div> 
        </div>
    );
}
export default TodoItemCard;