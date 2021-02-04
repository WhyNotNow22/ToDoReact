import React from 'react'
import { useContext } from 'react';
import { Droppable, DragDropContext } from 'react-beautiful-dnd'
import { TodoContext } from '../../context/TodoContext';
import TodoItemContainer from '../TodoItemContainer'
import './style.css'

function TodoList(props) {
  const { deleteTask, moveTask, openTask, dragEnd } = props;
  const { tasks } = useContext(TodoContext);
  return (
    <DragDropContext onDragEnd={dragEnd} >
      <Droppable droppableId='list'>
        {(provided) => {
          return (
            <div className='todo-list' {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) =>
                <TodoItemContainer
                  deleteTask={deleteTask(task.id)}
                  moveTask={moveTask(task.id)}
                  openTask={openTask}
                  title={task.title}
                  key={task.id}
                  id={task.id}
                  index={index}
                />
              )}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList
