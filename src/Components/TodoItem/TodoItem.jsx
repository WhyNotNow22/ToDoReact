import React from 'react'
import './TodoItem.css'
import ItemButton from '../ItemButton/ItemButton'


function TodoItem() {
  return (
    <div className='TodoItem'>
       <p>Text</p>
       <div className='ButtonsContainer'>
            <ItemButton type='∆' color='blue'/>
            <ItemButton type='✎' color='black'/>
            <ItemButton type='∇' color='blue'/>
            <ItemButton type='✕' color='red'/>
       </div>
    </div>
  );
}

export default TodoItem;
