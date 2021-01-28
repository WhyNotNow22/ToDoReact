import React from 'react'
import './style.css'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textAreaTitle: props.title,
      changeStatus: false,
    };
  }

  changeTask = event => {
    const { changeStatus } = this.state;
    if (changeStatus) {
      this.setState({ changeStatus: false })
    } else {
      this.setState({ changeStatus: true });
      let task = event.target.closest('DIV').previousElementSibling;
      task.focus();
      task.style.height = `${task.scrollHeight}px`;
      task.closest('DIV').style.border = '2px solid black';
    }
  }

  stopChange = event => {
    event.target.closest('DIV').style.border = '1px solid green';
    event.target.style.height = 'inherit';
    this.setState({ changeStatus: false });
  }

  change = event => {
    this.openTask(event);
    if (this.state.changeStatus) {
      this.setState({ textAreaTitle: event.target.value });
    }
  }

  openTask = event => {
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  render() {
    const { deleteTask, moveTask } = this.props;
    const { textAreaTitle } = this.state;
    return (
      <div className='TodoItem'>
        <textarea className='Title' value={textAreaTitle} onClick={this.openTask} onChange={this.change} onBlur={this.stopChange} />
        <div className='ButtonsContainer'>
          <span className='Move' onClick={moveTask}>∆</span>
          <span className='Change' onClick={this.changeTask}>✎</span>
          <span className='Move' onClick={moveTask}>∇</span>
          <span className='Delete' onClick={deleteTask}>✕</span>
        </div>
      </div>
    )
  }
}

export default TodoItem
