import React from 'react'
import TodoItem from '../TodoItem'
import { TodoContext } from '../../context/TodoContext'
import './style.css'

class TodoItemContainer extends React.Component {

  static contextType = TodoContext;

  constructor(props) {
    super(props);
    this.state = {
      textAreaTitle: props.title,
      changeStatus: false,
    };
  }

  changeTask = event => {
    this.setState({ changeStatus: true });
    let task = event.target.closest('DIV').previousElementSibling;
    task.closest('DIV').style.border = '2px solid #1890ff';
    task.focus();
  }

  stopChange = event => {
    event.target.closest('DIV').style.border = '2px solid #001529';
    this.setState({ changeStatus: false });
    const { tasks } = this.context;
    const { id } = this.props;
    const index = tasks.map(task => task.id).indexOf(id);
    tasks[index].title = this.state.textAreaTitle;
    this.context.updateState(tasks);
  }

  change = event => {
    if (this.state.changeStatus) {
      this.setState({ textAreaTitle: event.target.value });
    }
  }

  enterPressed = event => {
    const lineBreakIndex = event.target.selectionStart;
    const title = this.state.textAreaTitle;
    if (!event.ctrlKey) {
      this.stopChange(event);
    } else {
      this.setState({ textAreaTitle: title.slice(0, lineBreakIndex) + '\n' + title.slice(lineBreakIndex) });
    }
  }

  render() {
    const { deleteTask, moveTask, openTask, id, index } = this.props;
    const { textAreaTitle, changeStatus } = this.state;
    return (
      <TodoItem
        readOnly={!changeStatus}
        value={textAreaTitle}
        onChange={this.change}
        onBlur={this.stopChange}
        onClick={openTask(id, textAreaTitle)}
        moveTask={moveTask}
        changeTask={this.changeTask}
        deleteTask={deleteTask}
        enterPressed={this.enterPressed}
        id={id}
        indexDnD={index}
      />
    )
  }
}

export default TodoItemContainer
