import { useState } from 'react';
import '../styles/taskedit.css';

function Taskedit (props){
    const [item,setItem]= useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        
       
        const newItem = {item };
        props.onSubmit(newItem);
        setItem('');
    };

    return(
        <form onSubmit={handleSubmit} className='editContiner'>
            <input type="text" className='exittext' value={item} onChange={(event)=>{setItem(event.target.value)}} ></input>
            <button type='submit' className='addButton'>+</button>

        </form>
    );
}

export default Taskedit ;