import React from 'react'
import './style.css'

function TodoItem(props) {
  const {readOnly, value, style, onChange, onBlur, moveTask, changeTask, deleteTask , onClick} = props;
  return (
    <div className='todo-item'>
    <textarea
        readOnly={readOnly}
        className='title'
        value={value}
        style={style}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
      />
      <div className='buttons-container'>
        <span className='move' onClick={moveTask}>∆</span>
        <span className='change' onClick={changeTask}>✎</span>
        <span className='move' onClick={moveTask}>∇</span>
        <span className='delete' onClick={deleteTask}>✕</span>
      </div>
    </div>
  )
}

export default TodoItem
