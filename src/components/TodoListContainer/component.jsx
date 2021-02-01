import React from 'react'
import TaskInput from '../TaskInput'
import TodoList from '../TodoList'
import { TODO_ITEM_URL } from '../../constants/routers'
import './style.css'

class TodoListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  deleteTask = id => () => {
    this.setState(state => {
      let { tasks } = state;
      return {
        tasks: tasks.filter(task => task.id !== id)
      };
    })
  }

  moveTask = id => (event) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      const { tasks } = state;
      const movedTasks = [...tasks];
      if (event.target.innerHTML === '∆' && movedTasks[index - 1]) {
        [movedTasks[index - 1], movedTasks[index]] = [movedTasks[index], movedTasks[index - 1]];
      }
      if (event.target.innerHTML === '∇' && movedTasks[index + 1]) {
        [movedTasks[index + 1], movedTasks[index]] = [movedTasks[index], movedTasks[index + 1]];
      }
      return {
        tasks: movedTasks,
      }
    })
  }

  addTask = (task, messageHeight) => {
    this.setState(state => {
      const { tasks } = state;
      return {
        tasks: [
          {
            id: Date.now(),
            title: task,
            height: messageHeight,
          },
          ...tasks,
        ],
      }
    })
  }

  openTask = (id, title) => (event) => {
    if (event.target.readOnly) {
      const { history } = this.props;
      history.push({
        pathname: `${TODO_ITEM_URL}/${id}`,
        state: { title: title },
      })
    }
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className='app-container'>
        <TaskInput addTask={this.addTask} />
        <TodoList
          openTask={this.openTask}
          deleteTask={this.deleteTask}
          moveTask={this.moveTask}
          tasks={tasks} />
      </div>
    )
  }
}

export default TodoListContainer
