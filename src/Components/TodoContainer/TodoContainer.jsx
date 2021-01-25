import React from 'react'
import TodoList from '../TodoList/TodoList'
import InputField from '../InputField/InputField'
import AddButton from '../AddButton/AddButton'
import './TodoContainer.css'

function TodoContainer() {
  return (
    <div className='TodoContainer'>
        <InputField />
        <AddButton />
        <TodoList />
    </div>
  );
}

export default TodoContainer;
