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
      let arr = [...tasks];
      if (event.target.innerHTML === '∆' && arr[index - 1]) {
        [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      }
      if (event.target.innerHTML === '∇' && arr[index + 1]) {
        [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]];
      }
      return {
        tasks: arr,
      }
    })
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      const newTasks = [
        {
          id: Date.now(),
          title: task,
        },
        ...tasks,
      ]
      return {
        tasks: newTasks,
      }
    })
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className='AppContainer'>
        <TaskInput addTask={this.addTask} />
        <div className='TodoList'>
          {tasks.map(task =>
            <TodoItem
              deleteTask={this.deleteTask(task.id)}
              moveTask={this.moveTask(task.id)}
              title={task.title}
              key={task.id}
            />
          )}
        </div>
      </div>
    )
  }
}

export default TodoList
