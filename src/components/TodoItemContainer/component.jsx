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
    task.closest('DIV').style.border = '2px solid orange';
    task.focus();
  }

  stopChange = event => {
    event.target.closest('DIV').style.border = '2px solid green';
    this.setState({ changeStatus: false });
  }

  change = event => {
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
    if (this.state.changeStatus) {
      this.setState({ textAreaTitle: event.target.value });
    }
  }

  render() {
    const { deleteTask, moveTask, openTask, height } = this.props;
    const { textAreaTitle, changeStatus } = this.state;
    return (
      <TodoItem
        readOnly={!changeStatus}
        value={textAreaTitle}
        style={{ height: `${height}px` }}
        onChange={this.change}
        onBlur={this.stopChange}
        onClick={openTask}
        moveTask={moveTask}
        changeTask={this.changeTask}
        deleteTask={deleteTask}
      />
    )
  }
}

export default TodoItemContainer
