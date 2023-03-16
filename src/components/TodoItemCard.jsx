import '../styles/todoitemcard.css';

function TodoItemCard (props){

    const handleDelete= (e)=>{
        const id = props.itemId;
       props.onButtonClick(id);
    }

    const handleCompleted = (e)=>{
        e.preventDefault();
        props.onCheck(props.itemId)
    }


    return(
        <div className='cardcontiner'>
            <div className='cardleftside'>
                <input type="checkbox" checked={props.completed} name="isDone" id="checker" onClick={handleCompleted}/>
                <label style={{ color: props.completed ? 'green' : 'red' }}>{props.item} </label>
            </div>
            
            <div className='cardrightside'>
                <button onClick={handleDelete} >Delete</button>
            </div> 
        </div>
    );
}
export default TodoItemCard;