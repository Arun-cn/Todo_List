import '../styles/todoitemcard.css';

function TodoItemCard (props){
    return(
        <div className='cardcontiner'>
            <div className='cardleftside'>
                <input type="checkbox" name="isDone" id="checker" />
               <p>{props.item}</p>
            </div>
            
            <div className='cardrightside'>
                <button>Delete</button>
            </div> 
        </div>
    );
}
export default TodoItemCard;