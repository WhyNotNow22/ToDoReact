import React from 'react'
import TodoItemContainer from '../TodoItemContainer'
import './style.css'

function TodoList(props) {
  const { deleteTask, moveTask, openTask, tasks } = props;
  return (
    <div className='todo-list'>
      {tasks.map(task =>
        <TodoItemContainer
          deleteTask={deleteTask(task.id)}
          moveTask={moveTask(task.id)}
          openTask={openTask}
          title={task.title}
          key={task.id}
          id={task.id}
        />
      )}
    </div>
  )
} 

export default TodoList
