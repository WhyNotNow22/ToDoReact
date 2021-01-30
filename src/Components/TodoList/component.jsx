import React from 'react'
import TodoItem from '../TodoItem'
import TaskInput from '../TaskInput'
import './style.css'


class TodoList extends React.Component {
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
      let { tasks } = state;
      let movedTasks = [...tasks];
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
      let { tasks } = state;
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

  render() {
    const { tasks } = this.state;
    return (
      <div className='app-container'>
        <TaskInput addTask={this.addTask} />
        <div className='todo-list'>
          {tasks.map(task =>
            <TodoItem
              deleteTask={this.deleteTask(task.id)}
              moveTask={this.moveTask(task.id)}
              title={task.title}
              key={task.id}
              height={task.height}
            />
          )}
        </div>
      </div>
    )
  }
}

export default TodoList
