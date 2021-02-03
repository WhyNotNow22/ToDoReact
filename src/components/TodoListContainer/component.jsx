import React from 'react'
import { Layout } from 'antd'
import TaskInput from '../TaskInput'
import TodoList from '../TodoList'
import Logo from '../Logo'
import { TODO_ITEM_URL } from '../../constants/routers'
import 'antd/dist/antd.css'
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
    const iconName = event.currentTarget.firstElementChild.getAttribute("aria-label");
    this.setState(state => {
      const { tasks } = state;
      const movedTasks = [...tasks];
      if (iconName === 'up-circle' && movedTasks[index - 1]) {
        [movedTasks[index - 1], movedTasks[index]] = [movedTasks[index], movedTasks[index - 1]];
      }
      if (iconName === 'down-circle' && movedTasks[index + 1]) {
        [movedTasks[index + 1], movedTasks[index]] = [movedTasks[index], movedTasks[index + 1]];
      }
      return {
        tasks: movedTasks,
      }
    })
  }

  addTask = (task) => {
    this.setState(state => {
      const { tasks } = state;
      return {
        tasks: [
          {
            id: Date.now(),
            title: task,
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

  handleOnDragEnd = (result) => {
    if (!result.destination) return;
    this.setState(state => {
      const { tasks } = state;
      const newTasks = [...tasks];
      const [reorderedItem] = newTasks.splice(result.source.index, 1);
      newTasks.splice(result.destination.index, 0, reorderedItem);
      return {
        tasks: newTasks,
      }
    })
  }

  render() {
    const { tasks } = this.state;
    const { Header, Content, Footer } = Layout;
    return (
      <Layout className="layout">
        <Header className='header'>
          <Logo />
          <TaskInput addTask={this.addTask} />
        </Header>
        <Content className="main-content">
          <div className="site-layout-content">
            <TodoList
              openTask={this.openTask}
              deleteTask={this.deleteTask}
              moveTask={this.moveTask}
              dragEnd={this.handleOnDragEnd}
              tasks={tasks}
            />
          </div>
        </Content>
        <Footer className='footer'>Ant Design ©2021 ToDoReactApp</Footer>
      </Layout>
    )
  }
}

export default TodoListContainer
