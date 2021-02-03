import React from 'react'
import TodoItem from '../TodoItem'
import './style.css'

class TodoItemContainer extends React.Component {
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
  }

  change = event => {
    if (this.state.changeStatus) {
      this.setState({ textAreaTitle: event.target.value });
    }
  }

  render() {
    const { deleteTask, moveTask, openTask, id, index} = this.props;
    const { textAreaTitle, changeStatus } = this.state;
    return (
      <TodoItem
        readOnly={!changeStatus}
        value={textAreaTitle}
        onChange={this.change}
        onBlur={this.stopChange}
        onClick={openTask(id ,textAreaTitle)}
        moveTask={moveTask}
        changeTask={this.changeTask}
        deleteTask={deleteTask}
        id={id}
        indexDnD={index}
      />
    )
  }
}

export default TodoItemContainer
