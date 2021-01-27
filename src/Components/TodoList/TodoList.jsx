import React from 'react';
import TodoItem from '../TodoItem';
import TaskInput from '../TaskInput';
import './TodoList.css';


class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  };

  deleteTask = id => () => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      return {
        tasks: [...tasks.slice(0,index), ...tasks.slice(index + 1)],
      };
    });
  };

  raiseTask = id => () => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      let arr = [...tasks];
      if(arr[index - 1]) {
        let temp = arr[index - 1];
        arr[index - 1] = arr[index];
        arr[index] = temp;
      };
      return {
        tasks: arr,
      };
    });
  };

  dropTask = id => () => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      let arr = [...tasks];
      if(arr[index + 1]) {
        let temp = arr[index + 1];
        arr[index + 1] = arr[index];
        arr[index] = temp;
      }
      return {
        tasks: arr,
      }
    });
  };

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      const newTasks = [
        {
          id: Date.now(),
          title: task,
        },
        ...tasks,
      ];
      return {
        tasks: newTasks,
      };
    });
  };

  changeTask = id => () => {

  };

  render() {
    const { tasks } = this.state;
    return (
      <div className='AppContainer'>
        <TaskInput addTask={this.addTask} />
        <div className='TodoList'>
          {tasks.map(task =>
            <TodoItem
              deleteTask={this.deleteTask(task.id)}
              raiseTask={this.raiseTask(task.id)}
              dropTask={this.dropTask(task.id)}
              changeTask={this.changeTask(task.id)}
              title={task.title}
              key={task.id}
            />
          )}
        </div>
      </div>
    );
  };
};

export default TodoList;
