import React from 'react'
import { Layout } from 'antd'
import TaskInput from '../TaskInput'
import TodoList from '../TodoList'
import Logo from '../Logo'
import { TODO_ITEM_URL } from '../../constants/routers'
import { TodoContext } from '../../context/TodoContext'
import 'antd/dist/antd.css'
import './style.css'

class TodoListContainer extends React.Component {

  static contextType = TodoContext;

  deleteTask = id => () => {
    const { tasks } = this.context;
    this.context.updateState(tasks.filter(task => task.id !== id));
  }

  moveTask = id => (event) => {
    const { tasks } = this.context;
    const index = tasks.map(task => task.id).indexOf(id);
    const iconName = event.currentTarget.firstElementChild.getAttribute("aria-label");
    if (iconName === 'up-circle' && tasks[index - 1]) {
      [tasks[index - 1], tasks[index]] = [tasks[index], tasks[index - 1]];
    }
    if (iconName === 'down-circle' && tasks[index + 1]) {
      [tasks[index + 1], tasks[index]] = [tasks[index], tasks[index + 1]];
    }
    this.context.updateState(tasks);
  }

  addTask = (task) => {
    const { tasks } = this.context;
    this.context.updateState([
      {
        id: Date.now(),
        title: task,
      },
      ...tasks,
    ]);
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
    const { tasks } = this.context;
    const [reorderedItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItem);
    this.context.updateState(tasks);
  }

  render() {
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
            />
          </div>
        </Content>
        <Footer className='footer'>Ant Design ©2021 ToDoReactApp</Footer>
      </Layout>
    )
  }
}

export default TodoListContainer
