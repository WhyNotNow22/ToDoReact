import React from 'react'
import './TodoList.css'
import TodoItem from '../TodoItem/TodoItem'


function TodoList() {
  return (
    <div className='TodoList'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default TodoList;
