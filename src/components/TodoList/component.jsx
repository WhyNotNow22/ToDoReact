import React from 'react'
import { useContext } from 'react';
import { Droppable, DragDropContext } from 'react-beautiful-dnd'
import { Layout } from 'antd'
import { TodoContext } from '../../context/TodoContext';
import TodoItemContainer from '../TodoItemContainer'
import TaskInputContainer from  '../TaskInputContainer'
import Logo from '../Logo'
import './style.css'

function TodoList(props) {
  const { deleteTask, moveTask, openTask, dragEnd, addTask } = props;
  const { tasks } = useContext(TodoContext);
  const { Header, Content, Footer } = Layout;
  return (
    <Layout className="layout">
      <Header className='header'>
        <Logo />
        <TaskInputContainer addTask={addTask} />
      </Header>
      <Content className="main-content">
        <div className="site-layout-content">
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
        </div>
      </Content>
      <Footer className='footer'>Ant Design ©2021 ToDoReactApp</Footer>
    </Layout>
  )
}

export default TodoList
