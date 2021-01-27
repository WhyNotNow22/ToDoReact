import React from 'react';
import './TodoItem.css';

function TodoItem({ deleteTask, raiseTask, dropTask, title }) {
  return (
    <div className='TodoItem'>
      <p>{title}</p>
      <div className='ButtonsContainer'>
        <span className='Move' onClick={raiseTask}>∆</span>
        <span className='Change'>✎</span>
        <span className='Move' onClick={dropTask}>∇</span>
        <span className='Delete' onClick={deleteTask}>✕</span>
      </div>
    </div>
  );
};

export default TodoItem;
