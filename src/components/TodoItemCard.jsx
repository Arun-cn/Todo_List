import '../styles/todoitemcard.css';

function TodoItemCard (){
    return(
        <div className='cardcontiner'>
            <div className='cardleftside'>
                <input type="checkbox" name="isDone" id="checker" />
               <p>please add itemes!!!</p>
            </div>
            
            <div className='cardrightside'>
                <button>Delete</button>
                <button>edit</button>
            </div>
        </div>
    );
}
export default TodoItemCard;